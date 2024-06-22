import styles from "./UserInfo.module.css";
import { useUserStore } from "../library/userStore";

export default function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <div className={styles.userinfo}>
      <div className={styles.user}>
        <img
          className={styles.profile_img}
          src={currentUser.avatar || "/avatar.png"}
          alt=""
        />
        <h2>{currentUser.username}</h2>
      </div>
      <div className={styles.icons}>
        <img src="/more.png" alt="" />
        <img src="/video.png" alt="" />
        <img src="/edit.png" alt="" />
      </div>
    </div>
  );
}
