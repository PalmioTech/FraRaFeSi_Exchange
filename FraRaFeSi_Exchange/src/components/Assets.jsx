import { useEffect, useState } from "react";

export function Assets() {
  const [data, setData] = useState(null);
  const [searchToken, setSearchToken] = useState("");

  useEffect(() => {
    fetch(`	https://api.coincap.io/v2/assets`, {
      method: "GET",
      headers: { Accept: "application/json;version=20230302" },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSearchChange = (event) => {
    setSearchToken(event.target.value);
  };

  const filteredData = data
    ? data.filter((token) =>
        token.name.toLowerCase().includes(searchToken.toLowerCase())
      )
    : [];
  return (
    <div className="max-h-screen flex items-center justify-center px-3 py-5">
      <div className="w-full rounded-3xl  relative">
        <h1 className="text-2xl p-2 underline mb-2 text-whiteText">Assets</h1>
        <div className="w-full p-4 text-white ">
          <input
            type="text"
            className="w-full rounded-lg bg-transparent outline-violet p-3 pl-4 text-sm shadow-md shadow-violet  "
            placeholder="Search..."
            value={searchToken}
            onChange={handleSearchChange}
          />
        </div>
        <div className=" px-2 text-whiteText ">
          <ul>
            {data &&
              filteredData.slice(0, 10).map((token, index) => (
                <li
                  key={index}
                  className="mb-2 p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
                  {/* <div className="w-16 text-3xl mr-3">
                    <img
                      src={token.attributes.image_url}
                      alt={token.name}
                      className="max-w-8"
                    />
                  </div> */}
                  <div className="w-full flex justify-between items-center">
                    <p className="w-16">
                      {token.name}({token.symbol})
                    </p>
                    <p>
                      {new Intl.NumberFormat("it-IT", {
                        style: "decimal",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(token.priceUsd)}
                    </p>

                    <p className="text-green">
                      {parseFloat(token.changePercent24Hr)
                        .toFixed(2)
                        .replace(".", ",")}
                      %
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
