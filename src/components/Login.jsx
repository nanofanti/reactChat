import { useState } from "react";
import styles from "./Login.module.css";
import { toast } from "react-toastify";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.login}>
      <div className={styles.item}>
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.item}>
        <h2>Create an Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "/avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
