import React from 'react'

const StatsDaily = () => {
  return (
    <div className="grid grid-rows-2 gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Average Win</h2>
          <p className="text-2xl font-bold text-blue-600">$642.00</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Average Loss</h2>
          <p className="text-2xl font-bold text-red-600">$0.00</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Profit Factor</h2>
          <p className="text-2xl font-bold text-green-600">6.4</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Best Trade</h2>
          <p className="text-2xl font-bold text-green-600">$8,908.99</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Win Ratio</h2>
          <p className="text-2xl font-bold text-red-600">-4,800.90</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Risk Reward</h2>
          <p className="text-2xl font-bold text-blue-600">$3,490.00</p>
        </div>
      </div>
    </div>
  )
}

export default StatsDaily