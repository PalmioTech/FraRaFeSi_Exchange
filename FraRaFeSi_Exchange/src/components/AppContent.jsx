import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";
import { BuyButton } from "./BuyButton";
import { Assets } from "./Assets";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import WalletPage from "./WalletPage"; // Assicurati che il percorso sia corretto

export default function AppContent({
  page,
  setPage,
  isAuthenticated,
  userData,
}) {
  return (
    <main>
      <div>
        {page === "wallet" && (
          <WalletPage isAuthenticated={isAuthenticated} userData={userData} />
        )}
      </div>
      <div>{page === "profile" && <ProfilePage />}</div>
      <div>{page === "home" && <Home />}</div>
      <Navbar page={page} setPage={setPage} />
    </main>
  );
}
