import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Splash({ setPageHandler, setIsAuthenticated }) {
  const [view, setView] = useState("login");

  return (
    <div>
      {view === "login" ? (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          setView={setView}
          setPageHandler={setPageHandler}
        />
      ) : (
        <Register setView={setView} />
      )}
    </div>
  );
}
