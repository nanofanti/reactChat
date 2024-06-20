import "./App.css";
import Chat from "./components/Chat";
import List from "./components/List";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <div className="container">
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  );
}

export default App;
