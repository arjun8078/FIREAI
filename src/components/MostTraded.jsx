
import { Doughnut } from "react-chartjs-2";
import mostTradedData from '../data/MostTradedData';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";


// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const MostTraded = () => {
    const chartData = {
        labels: mostTradedData.map((item) => item.symbol),
        datasets: [
          {
            data: mostTradedData.map((item) => item.count),
            backgroundColor: [
              "#1E90FF", // NZDUSD (Blue)
              "#FF7F50", // GBPUSD (Orange)
              "#32CD32", // AUDCHF (Green)
              "#4682B4", // USDCHF (Light Blue)
              "#FFD700", // XAUUSD (Gold)
              "#87CEEB", // AUDNZD (Sky Blue)
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const chartOptions = {
        cutout: "70%", // Creates the donut effect
        plugins: {
          legend: {
            display: false, // Hide the legend since the list is already displayed
          },
        },
      };
    
  return (
    <div className="bg-white p-4 shadow rounded-lg">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Most Traded</h2>
    <div className="flex items-center justify-between">
      {/* Left: List of symbols */}
      <div>
        {mostTradedData.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-2 text-gray-800 text-sm"
          >
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
            ></span>
            {item.symbol}
          </div>
        ))}
      </div>

      {/* Right: Donut Chart */}
      <div className="w-28 h-28 relative">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-800">
            Total <br />
            {mostTradedData.reduce((total, item) => total + item.count, 0)}
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MostTraded