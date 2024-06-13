import WalletIcon from "../assets/WalletIcon";
import HomeIcon from "../assets/HomeIcon.jsx";
import ProfileIcon from "../assets/ProfileIcon";
import TransactionIcon from "../assets/TransactionIcon.jsx";

import clsx from "clsx";

export default function Navbar({ page, setPage }) {
  const navbar = [
    {
      name: "Wallet",
      icon: HomeIcon,
      page: "wallet",
    },
    {
      name: "Transaction",
      icon: TransactionIcon,
      page: "transaction",
    },
    {
      name: "Profile",
      icon: ProfileIcon,
      page: "profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-xl mx-auto px-4 bg-violet shadow rounded-t-3xl">
      <div className=" flex justify-between mt-auto py-4">
        {navbar.map((nav, index) => (
          <button
            key={index}
            onClick={() => setPage(nav.page)}
            className={clsx(
              page !== nav.page && "opacity-30 ",
              "rounded-full bg-whiteText max-w-10 w-full py-2  flex justify-center"
            )}
          >
            <nav.icon />
          </button>
        ))}
      </div>
    </div>
  );
}
