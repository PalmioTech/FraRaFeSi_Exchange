import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import WalletPage from "./WalletPage";

export default function AppContent({ page, setPage }) {
  return (
    <main>
      <div>{page === "wallet" && <WalletPage />}</div>
      <div>{page === "profile" && <ProfilePage />}</div>
      <div>{page === "home" && <Home />}</div>
      <Navbar page={page} setPage={setPage} />
    </main>
  );
}
