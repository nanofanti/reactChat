import { useEffect, useState } from "react";
import styles from "./ChatList.module.css";
import AddUser from "./AddUser";
import { useUserStore } from "../library/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../library/firebase";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);
          const user = userDocSnap.data();
          return { ...item, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className={styles.chatlist}>
      <div className={styles.search}>
        <div className={styles.search_bar}>
          <img src="search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "minus.png" : "plus.png"}
          alt=""
          className={styles.plus_image}
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      {chats.map((chat) => (
        <div className={styles.item} key={chat.chatId}>
          <img src="avatar.png" alt="" />
          <div className={styles.texts}>
            <span>Jane Doe</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
}
