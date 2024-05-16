import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";

export default function WalletPage() {
  return (
    <div className=" flex flex-col justify-center">
      <Sidebar />
      <WalletCard />
    </div>
  );
}
