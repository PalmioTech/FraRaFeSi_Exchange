import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";
import { BuyButton } from "./BuyButton";
import { Assets } from "./Assets";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import WalletPage from "./WalletPage"; // Assicurati che il percorso sia corretto
import Exchange from "./Exchange";

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
          <WalletPage
            isAuthenticated={isAuthenticated}
            userData={userData}
            setPage={setPage}
          />
        )}
      </div>
      <div>{page === "profile" && <ProfilePage userData={userData} />}</div>
      <div>{page === "home" && <Home />}</div>
      <div>{page === "exchange" && <Exchange setPage={setPage} />}</div>
      <Navbar page={page} setPage={setPage} />
    </main>
  );
}
