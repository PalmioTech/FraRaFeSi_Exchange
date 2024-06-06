import React, { useRef } from "react";
import backArrow from "../assets/backArrow.svg";
export default function Sell({ setPage }) {
  const amountRef = useRef();

  const handleClick = () => {
    setPage("wallet");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="relative flex flex-col gap-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <img
          onClick={handleClick}
          src={backArrow}
          className="absolute top-2 left-2 px-1 max-w-10 cursor-pointer"
        />
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">Sell</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white mb-1">
              Search and Select your Cryptocurrency
            </label>
            <input
              type="text"
              className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Type to search for a cryptocurrency"
            />
            <ul className="mt-2 max-h-32 overflow-auto bg-white bg-opacity-30 text-white shadow-sm shadow-violet-500 rounded-lg">
              <li className="p-2 cursor-pointer hover:bg-violet-500 flex justify-between">
                <span>Bitcoin (BTC)</span>
                <span>20000$</span>
              </li>
              <li className="p-2 cursor-pointer hover:bg-violet-500 flex justify-between">
                <span>Ethereum (ETH)</span>
                <span>30000$</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="text-white mb-2">Amount to Sell (USD)</label>
                <input
                  ref={amountRef}
                  type="number"
                  className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                  placeholder="Enter amount"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2">Receive (Crypto)</label>
                <input
                  type="number"
                  readOnly
                  className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                  placeholder="Converted amount"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300">
          SELL
        </button>
      </div>
    </div>
  );
}
