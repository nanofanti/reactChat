import styles from "./UserInfo.module.css";

export default function UserInfo() {
  return (
    <div className={styles.userinfo}>
      <div className={styles.user}>
        <img className={styles.profile_img} src="avatar.png" alt="" />
        <h2>John Doe</h2>
      </div>
      <div className={styles.icons}>
        <img src="/more.png" alt="" />
        <img src="/video.png" alt="" />
        <img src="/edit.png" alt="" />
      </div>
    </div>
  );
}
