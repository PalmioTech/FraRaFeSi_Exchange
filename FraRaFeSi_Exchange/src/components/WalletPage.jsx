import { Assets } from "./Assets";
import { BuyButton } from "./BuyButton";
import ProfilePage from "./ProfilePage";
import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";

export default function WalletPage({ isAuthenticated, userData }) {
  return (
    <div className="flex flex-col justify-center">
      <Sidebar userData={userData} /> {/* Passa userData come prop */}
      <WalletCard isAuthenticated={isAuthenticated} userData={userData} />
      <BuyButton />
      <Assets />
    </div>
  );
}
