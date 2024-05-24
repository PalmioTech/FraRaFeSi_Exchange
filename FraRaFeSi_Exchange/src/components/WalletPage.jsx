import { BuyButton } from "./BuyButton";
import ProfilePage from "./ProfilePage";
import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";

export default function WalletPage() {
  return (
    <div className=" flex flex-col justify-center">
      <Sidebar />
      <WalletCard />
      <BuyButton />
    </div>
  );
}
