import { useSelector } from "react-redux";
import { BuyButtonIcon } from "../assets/BuyButtonIcon";
import { DepositIcon } from "../assets/DepositIcon";
import { SellIcon } from "../assets/SellIcon";
import { SwapIcon } from "../assets/SwapIcon";

export function BuyButton({ setPage }) {
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);
  const handleClickExchange = () => {
    setPage("exchange");
  };
  const handleClickDeposit = () => {
    setPage("deposit");
  };

  return (
    <div className="flex justify-around flex-wrap">
      <div className="flex flex-col items-center mx-4 my-3">
        <button
          onClick={handleClickExchange}
          disabled={!selectedAsset}
          className={`flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater ${
            !selectedAsset ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BuyButtonIcon />
        </button>
        <span className="mt-2 text-whiteText">Buy</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <SellIcon />
        </button>
        <span className="mt-2 text-whiteText">Sell</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <SwapIcon />
        </button>
        <span className="mt-2 text-whiteText">Swap</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button
          onClick={handleClickDeposit}
          className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater"
        >
          <DepositIcon />
        </button>
        <span className="mt-2 text-whiteText">Deposit</span>
      </div>
    </div>
  );
}
