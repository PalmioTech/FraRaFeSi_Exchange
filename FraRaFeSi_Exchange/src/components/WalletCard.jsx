import pointed from "../assets/pointed.svg";
import cryptoCoin from "../assets/crypto.svg";

export function WalletCard({ isAuthenticated, userData }) {
  const { hash, balance } = userData;

  return (
    <div className="rounded-lg p-4 bg-custom-gradient text-whiteText w-10/12 shadow-violet shadow-md self-center m-2">
      <div className="flex justify-between mb-2">
        <p className="text-xs">Multi-Coin Wallet</p>
        <button className="max-w-6">
          <img src={pointed} alt="pointed" />
        </button>
      </div>
      <div className="flex justify-start mb-8">
        <h1 className="text-3xl font-bold">${balance}</h1>
      </div>
      <div className="flex justify-between">
        <p className="text-xs">{hash}</p>
        <img src={cryptoCoin} alt="crypto" className="max-w-6" />
      </div>
    </div>
  );
}
