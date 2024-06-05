import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useUpdateUserBalanceMutation } from "../reducers/apiSlice";

export default function Exchange({ setPage }) {
  const [cryptoReceived, setCryptoReceived] = useState(0);
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredCryptoData, setFilteredCryptoData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    setPage("wallet");
  };

  const userData = useSelector((state) => state.user.data);

  const amountRef = useRef();
  const [updateUserBalance] = useUpdateUserBalanceMutation();

  useEffect(() => {
    axios
      .get("api/cryptocurrency/listings/latest")
      .then((response) => {
        setCryptoData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCryptoData([]);
    } else {
      const filtered = cryptoData.filter((crypto) =>
        crypto.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredCryptoData(filtered);
    }
  }, [searchTerm, cryptoData]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { id, name, balance } = userData;

  function handleInsertAmount(event) {
    event.preventDefault();
    const amount = parseFloat(amountRef.current.value) || 0;
    const cryptoAmount = selectedCrypto
      ? amount / selectedCrypto.quote.USD.price
      : 0;
    setCryptoReceived(cryptoAmount);
  }

  async function handleBuy() {
    const amount = parseFloat(amountRef.current.value) || 0;
    try {
      const result = await updateUserBalance({
        id,
        newBalance: balance - amount,
      });

      console.log("Result from updateUserBalance:", result);

      if (result.error) {
        console.error("Failed to update balance:", result.error);
      } else {
        console.log("Balance updated successfully");
      }
    } catch (error) {
      console.error("Failed to update balance:", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="relative flex flex-col gap-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
          onClick={handleClick}>
          &times;
        </button>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">
            {name}'s <br /> Crypto Exchange
          </h1>
          <h2>Current Balance: USD {balance.toFixed(2)}</h2>
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-transparent shadow-sm shadow-violet-500 rounded-lg w-full p-3 bg-white bg-opacity-30 text-white placeholder-white"
              placeholder="Type to search for a cryptocurrency"
            />
            {filteredCryptoData.length > 0 && (
              <ul className="mt-2 max-h-32 overflow-auto bg-white bg-opacity-30 text-white shadow-sm shadow-violet-500 rounded-lg">
                {filteredCryptoData.map((crypto) => (
                  <li
                    key={crypto.id}
                    onClick={() => {
                      setSelectedCrypto(crypto);
                      setSearchTerm(crypto.name);
                      setFilteredCryptoData([]);
                    }}
                    className="p-2 cursor-pointer hover:bg-violet-500 flex justify-between">
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
          className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300">
          BUY
        </button>
      </div>
    </div>
  );
}
