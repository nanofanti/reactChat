import { useState } from "react";
import styles from "./Chat.module.css";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [open, setOpen] = useState(false);
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
      <div className={styles.center}></div>
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
          className={styles.message_input}
        />
        <div className={styles.emoji}>
          <img
            src="emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <EmojiPicker open={open} />
        </div>
        <button className={styles.send_button}>Send</button>
      </div>
    </div>
  );
}
