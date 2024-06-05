export function Wallet() {
  const cryptoCurrency = [
    {
      name: "Bitcoin",
      amount: 50,
    },
    {
      name: "Ethereum",
      amount: 25,
    },
    {
      name: "Ripple",
      amount: 100,
    },
    {
      name: "Litecoin",
      amount: 10,
    },
  ];

  return (
    <div className="flex flex-col">
      <div>
        <h2 className="mb-3 text-xl font-extrabold text-white p-4">
          Your Coins:
        </h2>
      </div>
      <div>
        <ol>
          {cryptoCurrency.map((crypto, index) => (
            <li
              key={index}
              className="mb-3 text-xl font-extrabold text-white p-4"
            >
              {crypto.name}: {crypto.amount}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
