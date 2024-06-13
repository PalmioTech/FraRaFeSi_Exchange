import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCryptoData,
  setSelectedCryptoSell,
} from "../reducers/exchangeSlice";

export function Wallet() {
  const cryptoCurrency = useSelector((state) => state.user.data.wallet);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const cryptoData = useSelector((state) => state.exchange.cryptoData);
  const cryptoDataID = (id) => cryptoData.find((crypto) => crypto.id === id);
  const dispatch = useDispatch();
  const selectedCryptoSell = useSelector(
    (state) => state.exchange.selectedCryptoSell
  );

  const handleCryptoClick = (crypto) => {
    dispatch(setSelectedCryptoSell(crypto));
  };

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

  if (isLoading)
    return <p className="flex justify-center text-whiteText">Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  const filteredCryptoCurrency = cryptoCurrency.filter(
    (crypto) => crypto.amount > 0
  );

  return (
    <div className="flex flex-col w-full items-center justify-center py-5">
      <div>
        <h1 className="mb-3 text-3xl font-extrabold text-white">
          Your{" "}
          <mark className="px-2 text-white bg-violet rounded">
            Crypto Wallet
          </mark>
        </h1>
      </div>
      <div className="text-whiteText border-t-violet shadow-xl shadow-violet mt-2 w-11/12 rounded-xl">
        {filteredCryptoCurrency.length === 0 ? (
          <div className="text-center text-red-500 p-4 text-xl mt-2 cursor-default rounded-2xl">
            Il tuo wallet è vuoto. Vai subito a comprare Crypto!
          </div>
        ) : (
          <ul className="max-h-96 overflow-y-auto">
            {filteredCryptoCurrency.map((crypto, index) => {
              const latestData = cryptoDataID(crypto.id);
              if (!latestData) return null;

              return (
                <li
                  key={index}
                  onClick={() => handleCryptoClick(crypto)}
                  className={`mb-4 p-1 shadow-lg rounded border-b hover:border-violet grid grid-cols-3 truncate cursor-pointer ${
                    selectedCryptoSell && selectedCryptoSell.id === crypto.id
                      ? "bg-custom-selected"
                      : ""
                  }`}
                >
                  <div className="flex items-center text-xl">
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
                      alt={crypto.name}
                      className="max-w-6 object-contain"
                    />
                    <span className="ml-2 text-xl font-semibold">
                      {crypto.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-end">
                    {crypto.amount.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-end text-green">
                    $
                    {parseFloat(
                      crypto.amount * latestData.quote.USD.price
                    ).toLocaleString()}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
