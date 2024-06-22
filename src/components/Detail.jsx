import { auth } from "../library/firebase";
import styles from "./Detail.module.css";

export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.user}>
        <img src="avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className={styles.info}>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Chat Settings</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Privacy & Help</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Photos</span>
            <img src="arrowDown.png" alt="" />
          </div>
          <div className={styles.photos}>
            <div className={styles.photo_item}>
              <div className={styles.photo_detail}>
                <img src="codememe.webp" alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src="download.png" alt="" className={styles.download_icon} />
            </div>
            <div className={styles.photo_item}>
              <div className={styles.photo_detail}>
                <img src="codememe.webp" alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src="download.png" alt="" className={styles.download_icon} />
            </div>
            <div className={styles.photo_item}>
              <div className={styles.photo_detail}>
                <img src="codememe.webp" alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src="download.png" alt="" className={styles.download_icon} />
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button className={styles.button_block}>Block User</button>
        <button
          className={styles.button_log_out}
          onClick={() => auth.signOut()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
