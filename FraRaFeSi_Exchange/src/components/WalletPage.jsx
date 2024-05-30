import { Assets } from "./Assets";
import { BuyButton } from "./BuyButton";
import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";

export default function WalletPage({ setPage }) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Sidebar />
      <WalletCard />
      <BuyButton setPage={setPage} />
      <Assets />
    </div>
  );
}
