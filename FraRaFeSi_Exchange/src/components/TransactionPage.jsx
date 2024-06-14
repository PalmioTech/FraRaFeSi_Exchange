import React from "react";
import avatarBatman from "../assets/avatarBatman.svg";
import { useSelector } from "react-redux";
import { useGetTransactionByIDQuery } from "../reducers/apiSlice";

const ActivityRow = ({
  sign,
  previousBalance,
  amount,
  balance,
  cryptoImage,
}) => (
  <div className="flex justify-between p-3   border-b border-gray-300 rounded-lg">
    <div className="relative w-8 h-8 ">
      <img
        src={avatarBatman}
        alt="Avatar"
        className="absolute top-0 left-0 w-8 h-8"
      />
      <img
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cryptoImage}.png`}
        alt="Bitcoin"
        className="absolute top-3 -right-4 w-8 h-8"
      />
    </div>
    <div className="flex  gap-4 justify-center items-center    ">
      <span className="text-lg font-bold text-white   leading-none">
        {sign}
      </span>
      <span className="text-sm text-gray-500 w-10">{previousBalance}</span>
      {/* <span className="text-sm text-gray-500 text-center">{balance}</span> */}
    </div>
    <div className="flex flex-col items-end justify-center w-20">
      <span className="text-m text-end text-gray-500 ">amount {amount}</span>
    </div>
  </div>
);

export default function TransactionPage() {
  const userData = useSelector((state) => state.user.data);
  // const transaction = useSelector((state) => state.user.data);
  const { balance, id } = userData;
  // const [updateTransaction] = useUpdateTransactionByID();
  const {
    data,
    // error,
    // isLoading,
  } = useGetTransactionByIDQuery(id);

  if (!data || !Array.isArray(data)) {
    return <div>No transactions found.</div>;
  }
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
      {data.map((transaction) => (
        <ActivityRow
          key={transaction.id}
          sign={transaction.sign}
          previousBalance={transaction.previous_balance.toLocaleString()}
          amount={transaction.amount}
          balance={balance}
          cryptoImage={transaction.id_crypto}
        />
      ))}
    </div>
  );
}
