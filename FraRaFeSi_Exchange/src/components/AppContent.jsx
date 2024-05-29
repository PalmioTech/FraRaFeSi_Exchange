import { Sidebar } from "./Sidebar";
import { WalletCard } from "./WalletCard";
import { BuyButton } from "./BuyButton";
import { Assets } from "./Assets";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import WalletPage from "./WalletPage"; // Assicurati che il percorso sia corretto
import Exchange from "./Exchange";
import { useState } from "react";

export default function AppContent({ page, setPage }) {
  return (
    <main>
      <div>{page === "wallet" && <WalletPage setPage={setPage} />}</div>
      <div>{page === "profile" && <ProfilePage setPage={setPage} />}</div>
      <div>{page === "home" && <Home />}</div>
      <div>{page === "exchange" && <Exchange setPage={setPage} />}</div>
      <div>
        {page !== "exchange" && <Navbar page={page} setPage={setPage} />}
      </div>
    </main>
  );
}
