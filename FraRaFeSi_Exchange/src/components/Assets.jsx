import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
import stellar from "../assets/stellar.svg";
import solana from "../assets/solana.svg";
import ripple from "../assets/ripple.svg";
import doge from "../assets/doge.svg";

export function Assets() {
  return (
    <div className="max-h-screen flex items-center justify-center px-3 py-5">
      <div className="w-full border-4  rounded-3xl shadow-lg relative">
        <div className="w-full pt-3 pb-8 px-4 text-white">
          <div className="mb-5">
            <input
              type="text"
              className="w-full text-white rounded-full border-2 px-3 py-1 text-sm"
              placeholder="Search..."
            />
          </div>
          <h1 className="text-3xl mb-4 p-2 border-b-2 border-gray-400">
            Market Overview
          </h1>
        </div>
        <div className="bg-gray-50 px-2">
          <ul className="relative -top-10">
            <li className="mb-2 p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16 text-3xl mr-3">
                <img src={bitcoin} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Bitcoin <span className="ml-3 text-gray-400">BTC</span>
              </div>
              <div className="text-green">+0.65%</div>
            </li>
            <li className="mb-2 bg-white p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16">
                <img src={ethereum} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Ethereum <span className="ml-3 text-gray-400">ETH</span>
              </div>
              <div className="text-green">+0.98%</div>
            </li>
            <li className="mb-2 bg-white p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16 text-3xl">
                <img src={stellar} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Stellar <span className="ml-3 text-gray-400">XLM</span>
              </div>
              <div className="text-green">+1.24%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16 text-3xl leading-none">
                <img src={ripple} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Ripple <span className="ml-3 text-gray-400">XRP</span>
              </div>
              <div className="text-green">+0.30%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16 text-3xl leading-none">
                <img src={doge} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Doge <span className="ml-3 text-gray-400">DOGE</span>
              </div>
              <div className="text-green">+1.40%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b-2 hover:border-violet flex items-center">
              <div className="w-16 text-3xl leading-none">
                <img src={solana} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Solana <span className="ml-3 text-gray-400">SOL</span>
              </div>
              <div className="text-green">+0.53%</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
