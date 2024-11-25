import React from 'react'

const ProfitDaily = () => {
  return (
    <div className="grid grid-rows-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Profit Target</h2>
          <p className="text-2xl font-bold text-green-600">$8,908.99</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Daily Loss Limit</h2>
          <p className="text-2xl font-bold text-red-600">$12,908.99</p>
        </div>
      </div>
    </div>
  )
}

export default ProfitDaily