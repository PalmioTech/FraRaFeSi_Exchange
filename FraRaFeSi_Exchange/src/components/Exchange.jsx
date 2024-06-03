import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserBalanceMutation } from "../reducers/apiSlice";

export default function Exchange({ setPage }) {
  const [cryptoReceived, setCryptoReceived] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage("wallet");
  };

  const selectedAsset = useSelector((state) => state.assets.selectedAsset);
  const { slug, symbol } = selectedAsset;
  const { price, percent_change_1h } = selectedAsset.quote.USD;

  const userData = useSelector((state) => state.user.data);
  const { id, name, balance, email } = userData;
  const amountRef = useRef();

  const [updateUserBalance] = useUpdateUserBalanceMutation(); // Otteniamo la funzione di mutazione

  function handleInsertAmount(event) {
    event.preventDefault();
    const amount = amountRef.current.value;
    const cryptoAmount = amount / price;
    setCryptoReceived(cryptoAmount);
  }

  async function handleBuy() {
    const amount = amountRef.current.value;
    try {
      const result = await updateUserBalance({
        id,
        newBalance: balance - amount,
      });
      // Log the result for debugging
      console.log("Result from updateUserBalance:", result);

      if (result.error) {
        console.error("Failed to update balance:", result.error);
      } else {
        console.log("Balance updated successfully");
        // Update local state or dispatch an action if necessary
      }
    } catch (error) {
      console.error("Failed to update balance:", error);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <div className="relative flex flex-col gap-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <button
          className="absolute top-0 right-2 p-2 font-bold text-white"
          onClick={handleClick}>
          x
        </button>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">
            {name}'s <br /> Crypto Exchange
          </h1>
          <h2>Current Balance: USD {balance}</h2>
        </div>
        <h2 className="text-white flex justify-around font-bold">
          <div>{slug}</div>
          <div>({symbol})</div>
          <div>{parseFloat(percent_change_1h).toFixed(2)}%</div>
          <div className="text-green">{parseFloat(price).toFixed(2)}</div>
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white mb-2">Spend (USD)</label>
            <input
              onChange={handleInsertAmount}
              ref={amountRef}
              type="number"
              className="crypto border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Receive (Crypto)</label>
            <input
              type="number"
              value={cryptoReceived}
              readOnly
              className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Converted amount"
            />
          </div>
        </div>
        <button
          onClick={handleBuy}
          className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300">
          BUY
        </button>
      </div>
    </div>
  );
}
