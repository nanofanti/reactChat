import styles from "./AddUser.module.css";

export default function AddUser() {
  return (
    <div className={styles.addUser}>
      <form>
        <input type="text" placeholder="Username" name="username" id="" />
        <button>Search</button>
      </form>
      <div className={styles.user}>
        <div className={styles.detail}>
          <img src="avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
}
