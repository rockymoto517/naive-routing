import { useState } from "react";
import "./App.css";
import UserInfo from "./component/UserInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <UserInfo />
      </div>
    </>
  );
}

export default App;
