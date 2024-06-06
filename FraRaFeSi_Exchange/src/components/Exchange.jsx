import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useUpdateUserBalanceMutation } from "../reducers/apiSlice";
import {
  setCryptoReceived,
  setCryptoData,
  setFilteredCryptoData,
  setSelectedCrypto,
  setSearchTerm,
  setError,
} from "../reducers/exchangeSlice";
import toast from "react-hot-toast";

export default function Exchange({ setPage }) {
  const cryptoReceived = useSelector((state) => state.exchange.cryptoReceived);
  const cryptoData = useSelector((state) => state.exchange.cryptoData);
  const filteredCryptoData = useSelector(
    (state) => state.exchange.filteredCryptoData
  );
  const selectedCrypto = useSelector((state) => state.exchange.selectedCrypto);
  const searchTerm = useSelector((state) => state.exchange.searchTerm);
  const error = useSelector((state) => state.exchange.error);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage("wallet");
  };

  const userData = useSelector((state) => state.user.data);

  const amountRef = useRef();
  const [updateUserBalance] = useUpdateUserBalanceMutation();

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(setFilteredCryptoData([]));
    } else {
      const filtered = cryptoData.filter((crypto) =>
        crypto.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      dispatch(setFilteredCryptoData(filtered));
    }
  }, [searchTerm, cryptoData, dispatch]);

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

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { id, name, balance } = userData;

  function handleInsertAmount(event) {
    event.preventDefault();
    const amount = parseFloat(amountRef.current.value) || 0;
    if (amount > balance) {
      toast.error("Il tuo saldo è insufficente per l'aquisto");
      dispatch(setError("Saldo insufficente"));
      dispatch(setCryptoReceived(0));
    } else {
      dispatch(setError(null));
      const cryptoAmount = selectedCrypto
        ? amount / selectedCrypto.quote.USD.price
        : 0;
      dispatch(setCryptoReceived(cryptoAmount));
    }
  }

  async function handleBuy() {
    const amount = parseFloat(amountRef.current.value) || 0;
    if (amount > balance) {
      dispatch(setError("Insufficient balance"));
      return;
    }
    try {
      const result = await updateUserBalance({
        id,
        newBalance: balance - amount,
      });

      console.log("Result from updateUserBalance:", result);

      if (result.error) {
        toast.error("Errore nell'acquisto della crypto");
        dispatch(setError("Failed to update balance"));
      } else {
        toast.success("Crypto acquistata con successo!");

        setPage("wallet");
        dispatch(setError(null));
      }
    } catch (error) {
      toast.error("Errore nell'acquisto della crypto");
      dispatch(setError("Failed to update balance"));
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="relative flex flex-col gap-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
          onClick={handleClick}
        >
          &times;
        </button>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">
            {name}'s <br /> Crypto Exchange
          </h1>
          <h2>Current Balance: USD {balance.toFixed(2)}</h2>

          {selectedCrypto && (
            <div className="flex justify-between items-center gap-2 mt-4 bg-opacity-30 bg-white rounded-lg p-2">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto.id}.png`}
                className="max-w-5"
              />
              <h3 className="text-2xl font-semibold ">{selectedCrypto.name}</h3>
              <p className="text-sm text-center">
                Current Price: USD {selectedCrypto.quote.USD.price.toFixed(2)}
              </p>
              <p className="text-sm text-center">
                1h Change:{" "}
                {selectedCrypto.quote.USD.percent_change_1h.toFixed(2)}%
              </p>
            </div>
          )}
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white mb-1">
              Search and Select Cryptocurrency
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Type to search for a cryptocurrency"
            />
            {filteredCryptoData.length > 0 && (
              <ul className="mt-2 max-h-32 overflow-auto bg-white bg-opacity-30 text-white shadow-sm shadow-violet-500 rounded-lg">
                {filteredCryptoData.map((crypto) => (
                  <li
                    key={crypto.id}
                    onClick={() => {
                      dispatch(setSelectedCrypto(crypto));
                      dispatch(setSearchTerm(crypto.name));
                      dispatch(setFilteredCryptoData([]));
                    }}
                    className="p-2 cursor-pointer hover:bg-violet-500 flex justify-between"
                  >
                    <span>
                      {crypto.name} ({crypto.symbol})
                    </span>
                    <span>
                      {crypto.quote.USD.percent_change_1h.toFixed(2)}%
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {selectedCrypto && (
            <div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label className="text-white mb-2">Spend (USD)</label>
                  <input
                    onChange={handleInsertAmount}
                    ref={amountRef}
                    type="number"
                    className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                    placeholder="Enter amount"
                    max={balance}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-2">Receive (Crypto)</label>
                  <input
                    type="number"
                    value={cryptoReceived}
                    readOnly
                    className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
                    placeholder="Converted amount"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleBuy}
          className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300"
          disabled={balance === 0}
        >
          BUY
        </button>
      </div>
    </div>
  );
}
