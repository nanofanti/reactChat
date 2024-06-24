import "./App.css";
import Chat from "./components/Chat";
import List from "./components/List";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import Notification from "./components/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./library/firebase";
import { useUserStore } from "./library/userStore";
import { useChatStore } from "./library/chatStore";

function App() {
  // const [user, setUser] = useState(false);

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  console.log(currentUser);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="container">
        {currentUser ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
}

export default App;
