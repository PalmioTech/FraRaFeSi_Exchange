import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Splash({ setPageHandler }) {
  const [view, setView] = useState("login");

  return (
    <div>
      {view === "login" ? (
        <Login setView={setView} />
      ) : (
        <Register setView={setView} />
      )}
    </div>
  );
}
