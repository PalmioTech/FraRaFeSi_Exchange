import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Deposit({ setPage }) {
  const [amount, setAmount] = useState("");
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const { hash, balance } = userData;

  const handleClick = () => {
    setPage("wallet");
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleDeposit = () => {
    const newBalance = balance + amount;

    fetch(`http://localhost:3000/users?hash=${hash}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ balance: newBalance }),
    })
      .then((response) => {
        if (response.ok) {
          dispatch({ type: "UPDATE_BALANCE", payload: newBalance });
        } else {
          console.error("Failed to update balance");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <div className="relative flex flex-col gap-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <button
          className="absolute top-0 right-2 p-2 font-bold text-white"
          onClick={handleClick}
        >
          x
        </button>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">Deposit Page</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white mb-2">Add Cash (USD)</label>
            <input
              type="number"
              onChange={handleAmountChange}
              className="crypto border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white text-center"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">
              <h2>Current Balance: USD {balance}</h2>
            </label>
          </div>
        </div>
        <button
          onClick={handleDeposit}
          className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300"
        >
          Deposit
        </button>
      </div>
    </div>
  );
}
