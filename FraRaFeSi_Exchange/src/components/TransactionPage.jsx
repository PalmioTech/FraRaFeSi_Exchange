export default function TransactionPage() {
  return (
    <div className="p-2 flex justify-center items-center min-h-screen">
      <div className="overflow-x-auto">
        <div className="flex justify-center mt-10 mb-10">
          <h1 className="text-3xl font-extrabold text-white">
            Your{" "}
            <mark className="px-2 text-white bg-violet rounded">
              Transactions
            </mark>
          </h1>
        </div>
        <table className="min-w-full table-auto mb-20">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-white">Date</th>
              <th className="px-3 py-2 text-left text-white">Type</th>
              <th className="px-3 py-2 text-left text-white">Asset</th>
              <th className="px-3 py-2 text-left text-white">Quantity</th>
              <th className="px-3 py-2 text-left text-white">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-700 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Buy</td>
              <td className="border px-3 py-2">BTC</td>
              <td className="border px-3 py-2">0.14</td>
              <td className="border px-3 py-2">1000 USD</td>
            </tr>
            <tr className="bg-gray-800 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Sell</td>
              <td className="border px-3 py-2">ETH</td>
              <td className="border px-3 py-2">112</td>
              <td className="border px-3 py-2">858 USD</td>
            </tr>
            <tr className="bg-gray-700 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Sell</td>
              <td className="border px-3 py-2">XRP</td>
              <td className="border px-3 py-2">1,280</td>
              <td className="border px-3 py-2">0.85 USD</td>
            </tr>
            <tr className="bg-gray-800 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Buy</td>
              <td className="border px-3 py-2">LTC</td>
              <td className="border px-3 py-2">50</td>
              <td className="border px-3 py-2">150 USD</td>
            </tr>
            <tr className="bg-gray-700 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Buy</td>
              <td className="border px-3 py-2">LTC</td>
              <td className="border px-3 py-2">50</td>
              <td className="border px-3 py-2">150 USD</td>
            </tr>
            <tr className="bg-gray-800 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Buy</td>
              <td className="border px-3 py-2">LTC</td>
              <td className="border px-3 py-2">50</td>
              <td className="border px-3 py-2">150 USD</td>
            </tr>
            <tr className="bg-gray-700 text-white">
              <td className="border px-3 py-2">06/06/24</td>
              <td className="border px-3 py-2">Buy</td>
              <td className="border px-3 py-2">LTC</td>
              <td className="border px-3 py-2">50</td>
              <td className="border px-3 py-2">150 USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
