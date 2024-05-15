import "./App.css";
import { useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
function App() {
  const [page, setPage] = useState("splash");
  return (
    <div className="h-screen  bg-grayBG w-full ">
      {page === "splash" ? (
        <Splash setPageHandler={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
