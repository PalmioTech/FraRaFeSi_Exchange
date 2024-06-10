import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useUpdateUserBalanceMutation } from "../reducers/apiSlice";
import {
  setCryptoReceived,
  setCryptoData,
  setFilteredCryptoData,
  setError,
  setSelectedCrypto,
} from "../reducers/exchangeSlice";
import { setWallet, setBalance } from "../reducers/userSlice";
import toast from "react-hot-toast";
import { Assets } from "./Assets";
import backArrow from "../assets/backArrow.svg";

export default function Exchange({ setPage }) {
  const [userDetails, setUserDetails] = useState(null);
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

  useEffect(() => {
    if (userData) {
      axios
        .get(`http://localhost:3000/users/${userData.id}`)
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userData]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const { id, name, balance, wallet } = userDetails;

  function handleInsertAmount(event) {
    event.preventDefault();
    const amount = parseFloat(amountRef.current.value) || 0;
    if (amount > balance) {
      toast.error("Il tuo saldo è insufficiente per l'acquisto");
      dispatch(setError("Saldo insufficiente"));
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
      const cryptoAmount = selectedCrypto
        ? amount / selectedCrypto.quote.USD.price
        : 0;
      let updatedWallet = [...wallet];
      const cryptoIndex = updatedWallet.findIndex(
        (crypto) => crypto.id === selectedCrypto.id
      );

      if (cryptoIndex >= 0) {
        updatedWallet[cryptoIndex].amount += cryptoAmount;
      } else {
        updatedWallet.push({
          id: selectedCrypto.id,
          name: selectedCrypto.name,
          amount: cryptoAmount,
          imageUrl: selectedCrypto.imageUrl,
        });
      }

      const result = await updateUserBalance({
        id,
        newBalance: balance - amount,
        wallet: updatedWallet,
      });

      console.log("Result from updateUserBalance:", result);

      if (result.error) {
        toast.error("Errore nell'acquisto della crypto");
        dispatch(setError("Failed to update balance"));
      } else {
        toast.success("Crypto acquistata con successo!");
        dispatch(setError(null));
        dispatch(setWallet(updatedWallet));
        dispatch(setBalance(balance - amount));
        dispatch(setSelectedCrypto(null));
        setPage("wallet");
      }
    } catch (error) {
      toast.error("Errore nell'acquisto della crypto");
      dispatch(setError("Failed to update balance"));
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex flex-col gap-6 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 pt-8 px-4 rounded-lg w-full max-w-md">
        <img
          onClick={handleClick}
          src={backArrow}
          className="absolute top-2 left-2 px-1 max-w-10 cursor-pointer"
        />

        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-3xl font-semibold">
            {name}'s <br /> Crypto Exchange
          </h1>
          <h2>Current Balance: USD {balance.toFixed(2)}</h2>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="flex flex-col">
          <Assets />
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
                <button
                  onClick={handleBuy}
                  className="bg-amber-400 hover:bg-amber-500 text-violet-900 rounded-lg w-full py-3 font-bold transition duration-300 mb-4"
                  disabled={balance === 0}
                >
                  BUY
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
