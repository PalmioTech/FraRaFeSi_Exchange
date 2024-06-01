import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducers/userSlice";

function App() {
  const [page, setPage] = useState("splash");
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      dispatch(setUser(userData));
      setPage("wallet");
    }
  }, []);
  const isAuthenticated =
    useSelector((state) => state.user.data) !== null ||
    sessionStorage.getItem("userData") !== null;
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
