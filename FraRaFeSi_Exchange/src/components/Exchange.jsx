import { useSelector } from "react-redux";

export default function Exchange({ setPage }) {
  const handleClick = () => {
    setPage("wallet");
  };
  const userData = useSelector((state) => state.user);
  const { name } = userData;

  return (
    <div className="flex items-center justify-center min-h-screen p-2">
      <div className="relative flex flex-col gap-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <button
          className="absolute top-0 right-2 p-2 font-bold  text-white"
          onClick={handleClick}
        >
          x
        </button>
        <h1 className="text-3xl text-center text-white font-semibold">
          {name}'s <br /> Crypto Exchange
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-white mb-2">Spend (USD)</label>
            <input
              type="number"
              className="crypto border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Receive (Crypto)</label>
            <input
              type="number"
              className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Converted amount"
            />
          </div>
        </div>
        <button className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300">
          BUY
        </button>
      </div>
    </div>
  );
}
