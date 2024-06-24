import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "./AddUser.module.css";
import { db } from "../library/firebase";
import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.addUser}>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" id="" />
        <button>Search</button>
      </form>
      {user && (
        <div className={styles.user}>
          <div className={styles.detail}>
            <img src={user.avatar || "/avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button>Add User</button>
        </div>
      )}
    </div>
  );
}
