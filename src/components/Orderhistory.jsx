import { useState } from 'react';

import orderHistoryData from '../data/orderData';

const Orderhistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orderHistoryData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orderHistoryData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Order History</h3>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Open Trades</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-400">Closed Trades</button>
        </div>
      </div>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Symbol</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Type</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Open Date</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Open Price</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">SL</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">TP</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Close Date</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Close Price</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Lots</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Profit</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Duration</th>
            <th className="border px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Gain</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="border px-4 py-2 text-sm">{item.symbol}</td>
              <td className={`border px-4 py-2 text-sm ${item.type === 'Buy' ? 'text-blue-500' : 'text-red-500'}`}>
                {item.type}
              </td>
              <td className="border px-4 py-2 text-sm">{item.openDate}</td>
              <td className="border px-4 py-2 text-sm">{item.openPrice}</td>
              <td className="border px-4 py-2 text-sm">{item.sl}</td>
              <td className="border px-4 py-2 text-sm">{item.tp}</td>
              <td className="border px-4 py-2 text-sm">{item.closeDate}</td>
              <td className="border px-4 py-2 text-sm">{item.closePrice}</td>
              <td className="border px-4 py-2 text-sm">{item.lots}</td>
              <td
                className={`border px-4 py-2 text-sm ${
                  item.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.profit}
              </td>
              <td className="border px-4 py-2 text-sm">{item.duration}</td>
              <td
                className={`border px-4 py-2 text-sm ${
                  item.gain.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.gain}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Orderhistory