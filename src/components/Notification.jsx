import {useState} from 'react'
import notificationData from '../data/NotificationData'

const Notification = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
  
    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = notificationData.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(notificationData.length / itemsPerPage);
  
    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
    <h2 className="text-lg font-semibold mb-4">Notifications</h2>
    <table className="table-auto w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium">Time</th>
          <th className="border border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-sm text-gray-700 font-medium">Message</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{item.time}</td>
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{item.type}</td>
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination controls */}
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={handlePrevPage}
        className={`px-4 py-2 rounded ${
          currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">
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

export default Notification