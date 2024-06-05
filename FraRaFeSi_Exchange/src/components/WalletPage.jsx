import { BuyButton } from "./BuyButton";
import { Sidebar } from "./Sidebar";
import { Wallet } from "./Wallet";
import { WalletCard } from "./WalletCard";

export default function WalletPage({ setPage }) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Sidebar setPage={setPage} />
      <WalletCard />
      <BuyButton setPage={setPage} />
      <Wallet />
    </div>
  );
}
