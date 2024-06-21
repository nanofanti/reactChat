import "./App.css";
import Chat from "./components/Chat";
import List from "./components/List";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { useState } from "react";
import Notification from "./components/Notification";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <div className="container">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
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
