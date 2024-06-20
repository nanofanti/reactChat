import ChatList from "./ChatList";
import UserInfo from "./UserInfo";
import styles from "./List.module.css";

export default function List() {
  return (
    <div className={styles.list}>
      <UserInfo />
      <ChatList />
    </div>
  );
}
