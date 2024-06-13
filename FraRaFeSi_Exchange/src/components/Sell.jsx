import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import backArrow from "../assets/backArrow.svg";
import { setCryptoData } from "../reducers/exchangeSlice";
import toast from "react-hot-toast";
import { createTransaction } from "../utils";
import {
  setCryptoReceived,
  setFilteredCryptoData,
  setError,
  setSelectedCrypto,
} from "../reducers/exchangeSlice";
import { setBalance, setWallet } from "../reducers/userSlice";
import { useUpdateUserBalanceMutation } from "../reducers/apiSlice";

export default function Sell({ setPage }) {
  const amountRef = useRef();
  const receiveRef = useRef();
  const dispatch = useDispatch();
  const selectedCryptoSell = useSelector(
    (state) => state.exchange.selectedCryptoSell
  );
  const [updateUserBalance] = useUpdateUserBalanceMutation();
  const userData = useSelector((state) => state.user.data);
  const cryptoData = useSelector((state) => state.exchange.cryptoData);
  const { wallet, balance, id } = userData;

  useEffect(() => {
    axios
      .get("api/cryptocurrency/listings/latest")
      .then((response) => {
        dispatch(setCryptoData(response.data.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  const handleClick = () => {
    setPage("wallet");
  };

  const cryptoDataID = (id) => cryptoData.find((crypto) => crypto.id === id);
  console.log(cryptoDataID(selectedCryptoSell.id).quote);

  const handleChange = () => {
    const amount = amountRef.current.value;
    const crypto = cryptoDataID(selectedCryptoSell.id);
    const cryptoValue = crypto.quote.USD.price;
    const usdt = amount * cryptoValue;
    receiveRef.current.value = usdt;
  };

  const handleMax = () => {
    const maxAmount = selectedCryptoSell.amount;
    amountRef.current.value = maxAmount;
    handleChange();
  };

  async function handleSell() {
    const maxAmount = selectedCryptoSell.amount;
    const amount = parseFloat(amountRef.current.value);
    if (amount > maxAmount) {
      toast.error(`You don't have enough ${selectedCryptoSell.name}`);
      return;
    }
    try {
      let updatedWallet = wallet.map((crypto) => {
        if (crypto.id === selectedCryptoSell.id) {
          return { ...crypto, amount: maxAmount - amount };
        }
        return crypto;
      });

      // Rimuovi le criptovalute con valore 0
      updatedWallet = updatedWallet.filter((crypto) => crypto.amount > 0);

      const transaction = await createTransaction(
        selectedCryptoSell.id,
        userData.id,
        amount,
        balance,
        "-"
      );

      const crypto = cryptoDataID(selectedCryptoSell.id);
      const cryptoValue = crypto.quote.USD.price;
      const usdt = amount * cryptoValue;

      const result = await updateUserBalance({
        id,
        newBalance: balance + usdt,
        wallet: updatedWallet,
      });

      if (result.error) {
        toast.error("Errore nella vendita della crypto");
        dispatch(setError("Failed to update balance"));
        dispatch(setSelectedCrypto(null));
      } else {
        toast.success("Crypto venduta con successo!");
        dispatch(setError(null));
        dispatch(setWallet(updatedWallet));
        dispatch(setBalance(balance + usdt));
        dispatch(setSelectedCrypto(null));
        setPage("wallet");
      }
    } catch (error) {
      toast.error("Errore vedntia della crypto");
      dispatch(setError("Failed to update balance"));
      console.log(error);
      dispatch(setSelectedCrypto(null));
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="relative flex flex-col gap-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <img
          onClick={handleClick}
          src={backArrow}
          className="absolute top-2 left-2 px-1 max-w-10 cursor-pointer"
        />
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">Sell</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            {selectedCryptoSell && (
              <div className="text-whiteText border-t-violet   mt-2 w-full rounded-xl p-4 bg-white bg-opacity-30">
                <div className="flex items-center text-xl mb-2 justify-center">
                  <img
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCryptoSell.id}.png`}
                    alt={selectedCryptoSell.name}
                    className="max-w-6 object-contain"
                  />
                  <span className="ml-2 text-xl font-semibold">
                    {selectedCryptoSell.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span>{selectedCryptoSell.amount.toFixed(4)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Value (USD):</span>
                  <span>
                    $
                    {parseFloat(
                      selectedCryptoSell.amount *
                        cryptoDataID(selectedCryptoSell.id).quote.USD.price
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Change il last 7d (%):</span>
                  <span>
                    {cryptoDataID(
                      selectedCryptoSell.id
                    ).quote.USD.percent_change_7d.toFixed(2)}
                    %
                  </span>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col relative">
                <label className="text-white mb-2">
                  Amount to Sell (crypto)
                </label>
                <input
                  ref={amountRef}
                  onChange={handleChange}
                  type="number"
                  className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                  placeholder="Enter amount"
                />
                <button
                  onClick={handleMax}
                  className="absolute right-2 bottom-3 rounded-lg  bg-violet text-white p-1"
                >
                  Max
                </button>
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2">Receive (USDT)</label>
                <input
                  ref={receiveRef}
                  type="number"
                  readOnly
                  className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                  placeholder="Converted amount"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSell}
          className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300"
        >
          SELL
        </button>
      </div>
    </div>
  );
}
