import React from "react";
import avatarBatman from "../assets/avatarBatman.svg";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";

const ActivityRow = ({ action, conversion, positive, negative }) => (
  <div className="flex justify-between p-3 border-b border-gray-300 rounded-lg">
    <div className="relative w-8 h-8">
      <img
        src={avatarBatman}
        alt="Avatar"
        className="absolute top-0 left-0 w-8 h-8"
      />
      <img
        src={bitcoin}
        alt="Bitcoin"
        className="absolute top-3 -right-4 w-8 h-8"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-lg font-bold text-white text-left">{action}</span>
      <span className="text-sm text-gray-500 text-center">{conversion}</span>
    </div>
    <div className="flex flex-col items-end justify-center">
      <span className="text-lg font-bold text-white text-left">{positive}</span>
      <span className="text-m text-gray-500 text-left">{negative}</span>
    </div>
  </div>
);

export default function TransactionPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center mt-2 mb-5 border-b-2 border-violet">
        <h1 className="text-3xl font-extrabold text-white text-center mb-5">
          Your{" "}
          <mark className="px-2 text-white bg-violet rounded">
            Transactions
          </mark>
        </h1>
      </div>
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
      <ActivityRow
        action="Sell"
        conversion="BTC → USD"
        positive="+60,000 USD"
        negative="-1 BTC"
      />
    </div>
  );
}
