import { useEffect, useState } from "react";

export function Assets() {
  const [data, setData] = useState(null);

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

  return (
    <div className="max-h-screen flex items-center justify-center px-3 py-5">
      <div className="w-full rounded-3xl  relative">
        <h1 className="text-2xl p-2 underline mb-2 text-whiteText">Assets</h1>
        <div className="w-full p-4 text-white ">
          <input
            type="text"
            className="w-full text-white rounded-full border-2 p-3 pl-4 text-sm shadow-lg shadow-violet"
            placeholder="Search..."
          />
        </div>
        <div className=" px-2 text-whiteText border-t-violet shadow-xl shadow-violet">
          <ul>
            {data &&
              data.slice(0, 6).map((token, index) => (
                <li
                  key={index}
                  className="mb-2 p-3 shadow-lg rounded border-b hover:border-violet flex items-center">
                  <div className="w-16 text-3xl mr-3">
                    {/* <img
                      src={token.attributes.image_url}
                      alt={token.name}
                      className="max-w-8"
                    /> */}
                  </div>
                  <div className="w-full">
                    {token.name}{" "}
                    <span className="ml-3 text-gray-400">
                      {/* {token.attributes.symbol} */}
                    </span>
                  </div>
                  <div className="text-green">{token.priceUsd}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
