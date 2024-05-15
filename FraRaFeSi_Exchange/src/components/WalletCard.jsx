import pointed from "../assets/pointed.svg";
import cryptoCoin from "../assets/crypto.svg";
export function WalletCard() {
  return (
    <div className="rounded-lg p-4 bg-gradient-to-r from-bluelight via-violet text-whiteText  max-w-80  w-full shadow-violet shadow-md mt-8">
      <div className="flex justify-between mb-2">
        <p className="text-xs ">Multi-Coin Wallet</p>
        <button className="max-w-6 ">
          <img src={pointed} />
        </button>
      </div>
      <div className="flex justify-start mb-8">
        <h1 className="text-3xl font-bold ">$ 123.45</h1>
      </div>
      <div className="flex justify-between">
        <p className="text-xs ">fsailfjkshlfiuahdfsliud</p>
        <img src={cryptoCoin} className="max-w-6" />
      </div>
    </div>
  );
}
