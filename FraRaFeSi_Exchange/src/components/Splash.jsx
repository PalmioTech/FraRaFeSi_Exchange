import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Splash({
  setPageHandler,

  setUserData,
}) {
  const [view, setView] = useState("login");

  return (
    <div>
      {view === "login" ? (
        <Login
          setView={setView}
          setPageHandler={setPageHandler}
          setUserData={setUserData}
        />
      ) : (
        <Register setView={setView} />
      )}
    </div>
  );
}
