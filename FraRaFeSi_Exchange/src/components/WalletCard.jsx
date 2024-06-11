import React, { useEffect, useState } from "react";
import pointed from "../assets/pointed.svg";
import cryptoCoin from "../assets/crypto.svg";
import { useSelector } from "react-redux";
import axios from "axios";

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
        .get(`http://localhost:3000/users/${userData.id}`)
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
    <div className="flex flex-col items-center justify-center  gap-4 p-4">
      <div className="rounded-lg p-6 bg-custom-gradient text-whiteText w-full max-w-md shadow-violet shadow-md">
        <div className="flex justify-between mb-2">
          <p className="text-xs">Multi-Coin Wallet</p>
          <button className="max-w-6">
            <img src={pointed} alt="pointed" />
          </button>
        </div>
        <div className="flex justify-start mb-4">
          <h1 className="text-4xl font-bold">${balance}</h1>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">{hash}</p>
          <img src={cryptoCoin} alt="crypto" className="w-6 h-6" />
        </div>
      </div>
      <div className="text-center mt-2 gap-3 flex flex-col">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-1">
            Total in Fiat:
            <span className="px-2 text-white bg-violet rounded ml-2">
              ${fiatTotal.toFixed(2)}
            </span>
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-1">
            Total in Crypto:
            <span className="px-2 text-white bg-violet rounded ml-2">
              {cryptoTotal.toFixed(4)} coins
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
