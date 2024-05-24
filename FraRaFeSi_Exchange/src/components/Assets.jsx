import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
import stellar from "../assets/stellar.svg";
import solana from "../assets/solana.svg";
import ripple from "../assets/ripple.svg";
import doge from "../assets/doge.svg";

export function Assets() {
  return (
    <div className="max-h-screen flex items-center justify-center px-3 py-5">
      <div className="w-full rounded-3xl  relative">
        <h1 className="text-2xl p-2 underline mb-2 text-whiteText">Assets</h1>
        <div className="w-full p-4 text-white ">
          <input
            type="text"
            className="w-full text-white rounded-full border-2 p-3 pl-4 text-sm shadow-lg shadow-violet"
            placeholder="Search..."
          />
        </div>
        <div className="bg-gray-50 px-2 text-whiteText border-t-violet shadow-xl shadow-violet">
          <ul>
            <li className="mb-2 p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
              <div className="w-16 text-3xl mr-3">
                <img src={bitcoin} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Bitcoin <span className="ml-3 text-gray-400">BTC</span>
              </div>
              <div className="text-green">+0.65%</div>
            </li>
            <li className="mb-2 bg-white p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
              <div className="w-16">
                <img src={ethereum} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Ethereum <span className="ml-3 text-gray-400">ETH</span>
              </div>
              <div className="text-green">+0.98%</div>
            </li>
            <li className="mb-2 bg-white p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
              <div className="w-16 text-3xl">
                <img src={stellar} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Stellar <span className="ml-3 text-gray-400">XLM</span>
              </div>
              <div className="text-green">+1.24%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
              <div className="w-16 text-3xl leading-none">
                <img src={ripple} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Ripple <span className="ml-3 text-gray-400">XRP</span>
              </div>
              <div className="text-green">+0.30%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
              <div className="w-16 text-3xl leading-none">
                <img src={doge} alt="Bitcoin" className="max-w-8" />
              </div>
              <div className="w-full">
                Doge <span className="ml-3 text-gray-400">DOGE</span>
              </div>
              <div className="text-green">+1.40%</div>
            </li>
            <li className="p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
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
