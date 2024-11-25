import React from 'react'

const MetricsCard = () => {
    const metrics = [
        { title: 'Total Orders', value: 1200 },
        { title: 'Total Sales', value: '$30,000' },
        { title: 'Active Users', value: 450 },
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{metric.title}</h3>
          <p className="mt-2 text-2xl font-bold text-blue-500 dark:text-blue-400">{metric.value}</p>
        </div>
      ))}
    </div>
  )
}

export default MetricsCard