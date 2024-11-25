import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-5">
    <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-gray-100">Trading Dashboard</h2>
    <ul>
      <li className="py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Accounts Overview</li>
      <li className="py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Payouts</li>
      <li className="py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Leaderboard</li>
      <li className="py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Order List</li>
    </ul>
  </div>
  )
}

export default Sidebar