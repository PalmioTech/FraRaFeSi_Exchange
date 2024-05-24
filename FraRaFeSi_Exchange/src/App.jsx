import "./App.css";
import { useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
function App() {
  const [page, setPage] = useState("splash");
  return (
    <div className="min-h-screen bg-gradient-to-r from-grayBG max-w-xl mx-auto">
      {page === "walletpage" ? (
        <Splash setPageHandler={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
