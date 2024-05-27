import { useEffect, useState } from "react";
import axios from "axios";

export function Assets() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Stato per l'input di ricerca
  const [error, setError] = useState(null); // Stato per gli errori

  useEffect(() => {
    axios
      .get("/api/cryptocurrency/listings/latest")
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  // Funzione per gestire il cambiamento dell'input di ricerca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtra i dati in base al valore dell'input di ricerca
  const filteredData = data?.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-h-screen flex items-center justify-center px-3 py-5">
      <div className="w-full rounded-3xl relative">
        <h1 className="text-2xl p-2 underline mb-2 text-whiteText">Assets</h1>
        <div className="w-full p-4 text-white">
          <input
            type="text"
            className="w-full text-black rounded-full border-2 p-3 pl-4 text-sm shadow-lg shadow-violet"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange} // Aggiorna lo stato di ricerca ad ogni cambiamento
          />
        </div>
        <div className="px-2 text-whiteText border-t-violet shadow-xl shadow-violet">
          {error && <p className="text-red-500">{error}</p>}
          <ul>
            {filteredData &&
              filteredData.slice(0, 6).map((token, index) => (
                <li
                  key={index}
                  className="mb-2 p-3 shadow-lg rounded border-b hover:border-violet flex items-center"
                >
                  <div className="w-16 h-16 text-3xl mr-3">
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${token.id}.png`}
                      alt={token.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    {token.name}{" "}
                    <span className="ml-3 text-gray-400">{token.symbol}</span>
                  </div>
                  <div className="text-green">
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
