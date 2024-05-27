import { useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";

function App() {
  const [page, setPage] = useState("splash");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  return (
    <div className="min-h-screen bg-blackText max-w-xl mx-auto">
      {page === "splash" && !isAuthenticated ? (
        <Splash
          setIsAuthenticated={setIsAuthenticated}
          setPageHandler={setPage}
          setUserData={setUserData}
        />
      ) : (
        <AppContent
          page={page}
          setPage={setPage}
          isAuthenticated={isAuthenticated}
          userData={userData}
          setIsAuthenticated={setIsAuthenticated}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

export default App;
