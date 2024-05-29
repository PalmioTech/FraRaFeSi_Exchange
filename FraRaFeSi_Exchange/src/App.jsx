import { useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [page, setPage] = useState("splash");
  const isAuthenticated = useSelector((state) => state.isLogged);

  return (
    <div className="min-h-screen bg-blackText max-w-xl mx-auto">
      {page === "splash" && !isAuthenticated ? (
        <Splash setPageHandler={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
