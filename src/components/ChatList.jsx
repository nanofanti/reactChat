import { useState } from "react";
import styles from "./ChatList.module.css";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);

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
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      <div className={styles.item}>
        <img src="avatar.png" alt="" />
        <div className={styles.texts}>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
