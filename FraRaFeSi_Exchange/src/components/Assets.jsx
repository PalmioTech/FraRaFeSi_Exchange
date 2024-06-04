import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAsset } from "../reducers/assetsSlice";

export function Assets() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);

  useEffect(() => {
    axios
      .get("api/cryptocurrency/listings/latest")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleItemClick = (coin) => {
    dispatch(setSelectedAsset(coin));
  };

  const filteredData = data?.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-h-screen w-full flex items-center justify-center py-5 mt-2">
      <div className="w-full rounded-3xl relative">
        <div className="flex justify-center">
          <h1 className="mb-3 text-xl font-extrabold text-white">
            Crypto{" "}
            <mark className="px-2 text-white bg-violet rounded">Market</mark>
          </h1>
        </div>
        <div className="w-full p-4 text-white">
          <input
            type="text"
            className="w-full text-white rounded-full border-2 p-3 pl-4 text-sm shadow-lg shadow-violet bg-transparent placeholder:text-white"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="px-1 text-whiteText border-t-violet shadow-xl shadow-violet mt-2">
          {error && <p className="text-red-500">{error}</p>}
          <ul className="max-h-96 overflow-y-auto">
            {filteredData &&
              filteredData.slice(0, 10).map((token, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(token)}
                  className={`mb-2 p-1 shadow-lg rounded border-b hover:border-violet grid grid-cols-3  truncate cursor-pointer ${
                    selectedAsset?.id === token.id
                      ? "bg-custom-selected"
                      : "bg-transparent"
                  }`}>
                  <div className="flex  items-center     text-xl">
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${token.id}.png`}
                      alt={token.name}
                      className="max-w-8 object-contain"
                    />
                    <span className="ml-2">{token.name}</span>
                  </div>

                  <div className="flex items-center  justify-end   ">
                    {parseFloat(token.quote.USD.percent_change_1h).toFixed(2)}%
                  </div>
                  <div className="flex items-center  justify-end  text-green ">
                    ${parseFloat(token.quote.USD.price).toFixed(2)}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
