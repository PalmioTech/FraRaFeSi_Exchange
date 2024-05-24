import "./App.css";
import { useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
function App() {
  const [page, setPage] = useState("splash");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-blackText max-w-xl mx-auto">
      {page === "splash" && !isAuthenticated ? (
        <Splash
          setIsAuthenticated={setIsAuthenticated}
          setPageHandler={setPage}
        />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
