import Navbar from "./Navbar";
import WalletPage from "./WalletPage";

export default function AppContent({ page, setPage }) {
  return (
    <main>
      <div>{page === "wallet" && <WalletPage />}</div>
      <Navbar page={page} setPage={setPage} />
    </main>
  );
}
