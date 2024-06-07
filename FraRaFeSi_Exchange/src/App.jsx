import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import AppContent from "./components/AppContent";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducers/userSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const [page, setPage] = useState("splash");
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userDataSaved");
    if (storedUserData) {
      const userDataSaved = JSON.parse(storedUserData);
      fetch(`http://localhost:3000/users?email=${userDataSaved.email}`)
        .then((response) => response.json())
        .then((userArray) => {
          const user = userArray[0];
          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            balance: user.balance,
            hash: user.hash,
            wallet: user.wallet,
          };
          dispatch(setUser(userData));
          setPage("wallet");
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [dispatch]);

  const isAuthenticated =
    useSelector((state) => state.user.data) !== null ||
    sessionStorage.getItem("userDataSaved") !== null;

  return (
    <div className="min-h-screen bg-blackText max-w-xl mx-auto">
      <Toaster />
      {page === "splash" && !isAuthenticated ? (
        <Splash setPageHandler={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
