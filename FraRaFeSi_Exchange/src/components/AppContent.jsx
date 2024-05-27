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

export default function AppContent({
  page,
  setPage,
  isAuthenticated,
  userData,
  setIsAuthenticated,
  setUserData,
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
      <div>
        {page === "profile" && (
          <ProfilePage
            setIsAuthenticated={setIsAuthenticated}
            setUserData={setUserData}
            setPage={setPage}
            userData={userData}
          />
        )}
      </div>
      <div>{page === "home" && <Home />}</div>
      <div>
        {page === "exchange" && (
          <Exchange setPage={setPage} userData={userData} />
        )}
      </div>
      <div>
        {page !== "exchange" && <Navbar page={page} setPage={setPage} />}
      </div>
    </main>
  );
}
