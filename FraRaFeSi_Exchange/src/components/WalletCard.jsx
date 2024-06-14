import React, { useEffect, useState } from "react";
import pointed from "../assets/pointed.svg";
import cryptoCoin from "../assets/crypto.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils";

export function WalletCard() {
  const [balance, setBalance] = useState(0);
  const [hash, setHash] = useState("");
  const [fiatTotal, setFiatTotal] = useState(0);
  const [cryptoTotal, setCryptoTotal] = useState(0);

  const userData = useSelector((state) => state.user.data);
  const cryptoData = useSelector((state) => state.exchange.cryptoData);

  useEffect(() => {
    if (userData) {
      axios
        .get(`${BASE_URL}/users/${userData.id}`)
        .then((response) => {
          setBalance(response.data.balance);
          setHash(response.data.hash);
          calculateTotals(response.data.wallet);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userData, cryptoData]);

  const calculateTotals = (wallet) => {
    let fiatSum = 0;
    let cryptoSum = 0;

    wallet.forEach((crypto) => {
      const cryptoDetails = cryptoData.find((data) => data.id === crypto.id);
      if (cryptoDetails) {
        fiatSum += crypto.amount * cryptoDetails.quote.USD.price;
        cryptoSum += crypto.amount;
      }
    });

    setFiatTotal(fiatSum);
    setCryptoTotal(cryptoSum);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="rounded-lg p-6 bg-custom-gradient text-whiteText w-full max-w-md shadow-violet shadow-md">
        <div className="flex justify-between mb-2">
          <p className="text-xs">Multi-Coin Wallet</p>

          <button className="max-w-6">
            <img src={pointed} alt="pointed" />
          </button>
        </div>
        <div className="flex flex-col items-start mb-4">
          <h1 className="text-2xl font-bold">
            {" "}
            FIAT:
            <span className="px-2 text-black bg-slate-300 rounded ml-2">
              ${balance.toLocaleString()}
            </span>
          </h1>
          <div>
            <h2 className="text-l font-bold text-white mb-1 mt-2">
              ${fiatTotal.toLocaleString()}
            </h2>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">{hash}</p>
          <img src={cryptoCoin} alt="crypto" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
