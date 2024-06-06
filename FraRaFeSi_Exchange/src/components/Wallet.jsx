import { useSelector } from "react-redux";
import { useGetUserByEmailQuery } from "../reducers/apiSlice";
import { useEffect, useState } from "react";

export function Wallet() {
  const email = useSelector((state) => state.user.data.email);
  const { data: user, error, isLoading } = useGetUserByEmailQuery(email);
  const [cryptoCurrency, setCryptoCurrency] = useState([]);

  useEffect(() => {
    if (user && user.length > 0) {
      const currentUser = user[0];
      setCryptoCurrency(currentUser.wallet);
    }
  }, [user]);

  if (isLoading)
    return <p className="flex justify-center text-whiteText">Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

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
        {cryptoCurrency.length === 0 ? (
          <div className="text-center text-red-500 p-4 text-xl mt-2 cursor-default rounded-2xl">
            Il tuo wallet è vuoto. Vai subito a comprare Crypto!
          </div>
        ) : (
          <ul className="max-h-96 overflow-y-auto">
            {cryptoCurrency.map((crypto, index) => (
              <li
                key={index}
                className="first-letter:mb-2 p-1 shadow-lg rounded-xl border-b hover:border-violet truncate cursor-pointer flex justify-between px-2 text-xl mt-2"
              >
                <div>{crypto.name}</div>
                <div>{crypto.amount}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
