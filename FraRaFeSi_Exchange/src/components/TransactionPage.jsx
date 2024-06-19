import React from "react";
import avatarBatman from "../assets/avatarBatman.svg";
import { useSelector } from "react-redux";
import { useGetTransactionByIDQuery } from "../reducers/apiSlice";

const ActivityRow = ({
  sign,
  previousBalance,
  amount,
  spentAmount,
  cryptoImage,
  cryptoName,
}) => {
  const formattedSign = sign === "+" ? "Buy" : "Sell";
  const formattedAmount = parseFloat(amount).toFixed(2);
  const formattedSpentAmount = parseFloat(spentAmount).toFixed(2);

  return (
    <div className="flex justify-between p-3 border-b border-gray-300 rounded-lg mb-2">
      <div className="relative w-8 h-8">
        <img
          src={avatarBatman}
          alt="Avatar"
          className="absolute top-0 left-0 w-8 h-8"
        />
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cryptoImage}.png`}
          alt="Crypto"
          className="absolute top-3 -right-4 w-8 h-8"
        />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <span className="text-lg font-bold text-white leading-none">
          {formattedSign}
        </span>
        <span className="text-sm text-white w-10">{previousBalance}</span>
      </div>
      <div className="flex flex-col items-end justify-center w-20">
        <span className="text-m text-end text-white">
          {formattedAmount} {cryptoName}
        </span>
        <span className="text-sm text-end text-green">
          {formattedSpentAmount} USD
        </span>
      </div>
    </div>
  );
};

export default function TransactionPage() {
  const userData = useSelector((state) => state.user.data);
  const { id } = userData;
  const { data } = useGetTransactionByIDQuery(id);

  if (!data || !Array.isArray(data)) {
    return <div>No transactions found.</div>;
  }

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <div className="flex justify-center mt-2 mb-5 border-b-2 border-violet">
        <h1 className="text-3xl font-extrabold text-white text-center mb-5">
          Your{" "}
          <mark className="px-2 text-white bg-violet rounded">
            Transactions
          </mark>
        </h1>
      </div>
      <div className="flex-1 overflow-y-scroll">
        {data.map((transaction) => (
          <ActivityRow
            key={transaction.id}
            sign={transaction.sign}
            previousBalance={transaction.previous_balance?.toFixed(2) || "0.00"}
            amount={transaction.amount}
            spentAmount={transaction.spentAmount}
            cryptoImage={transaction.id_crypto}
            cryptoName={transaction.cryptoName}
          />
        ))}
      </div>
    </div>
  );
}
