import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBalance } from "../reducers/userSlice";
import toast from "react-hot-toast";
import backArrow from "../assets/backArrow.svg";
export default function Deposit({ setPage }) {
  const [amount, setAmount] = useState("");
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const { hash, balance, id } = userData;

  const handleClick = () => {
    setPage("wallet");
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleDeposit = () => {
    const newBalance = balance + amount;
    if (amount != 0) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ balance: newBalance }),
      })
        .then((response) => {
          if (response.ok) {
            dispatch(setBalance(newBalance));
            toast.success("Il tuo deposito è avvenuto con successo");
            setPage("wallet");
          } else {
            toast.error("Errore durante il tuo deposito");
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      toast.error("Inserisci un deposito positivo");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <div className="relative flex flex-col gap-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <img
          onClick={handleClick}
          src={backArrow}
          className="absolute top-2 left-2 px-1 max-w-10 cursor-pointer"
        />
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
