import { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../library/firebase";
import { useChatStore } from "../library/chatStore";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();
  const { chatId } = useChatStore();

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });
    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <div className={styles.user}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <span>Jane Doe</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              rerum.
            </p>
          </div>
        </div>
        <div className={styles.icons}>
          <img src="phone.png" alt="" />
          <img src="video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.message_own}>
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_other}>
          <img src="avatar.png" alt="" />
          <div className={styles.other_texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_own}>
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_other}>
          <img src="avatar.png" alt="" />
          <div className={styles.other_texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_own}>
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_other}>
          <img src="avatar.png" alt="" />
          <div className={styles.other_texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message_own}>
          <div className={styles.texts}>
            <img src="codememe.webp" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.icons_bottom}>
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          name=""
          id=""
          value={text}
          className={styles.message_input}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.emoji}>
          <img
            src="emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className={styles.picker_container}>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className={styles.send_button}>Send</button>
      </div>
    </div>
  );
}
