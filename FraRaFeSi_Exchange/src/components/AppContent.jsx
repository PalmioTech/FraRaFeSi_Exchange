import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import WalletPage from "./WalletPage";
import Exchange from "./Exchange";
import Sell from "./Sell";
import Deposit from "./DepositPage";
import TransactionPage from "./TransactionPage";

export default function AppContent({ page, setPage }) {
  return (
    <main>
      <div>{page === "wallet" && <WalletPage setPage={setPage} />}</div>
      <div>{page === "profile" && <ProfilePage setPage={setPage} />}</div>
      <div>{page === "home" && <Home />}</div>
      <div>
        {page === "transaction" && <TransactionPage setPage={setPage} />}
      </div>
      <div>{page === "exchange" && <Exchange setPage={setPage} />}</div>
      <div>{page === "sell" && <Sell setPage={setPage} />}</div>{" "}
      <div>{page === "deposit" && <Deposit setPage={setPage} />}</div>
      <div>
        {page !== "exchange" && page !== "sell" && page !== "deposit" && (
          <Navbar page={page} setPage={setPage} />
        )}
      </div>
    </main>
  );
}
