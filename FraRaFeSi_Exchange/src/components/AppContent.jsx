import Login from "./Login";
import { LoginForm } from "./LoginForm";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Splash from "./Splash";
import WalletPage from "./WalletPage";

export default function AppContent({ page, setPage }) {
  return (
    <main>
      <div>{page === "splash" && <Splash />}</div>
      <div>{page === "wallet" && <WalletPage />}</div>
      <div>{page === "profile" && <ProfilePage />}</div>
      <Navbar page={page} setPage={setPage} />
    </main>
  );
}
