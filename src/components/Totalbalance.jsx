import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Totalbalance = () => {
    const [data, setData] = useState({
        balance: [],
        equity: [],
        timestamps: [],
        currentBalance: 0,
        currentEquity: 0,
        profit: ""
      });
    
      useEffect(() => {
        // Hardcoded JSON data simulation
        const fetchData = async () => {
          const dummyData = await import("../data/GraphData");
          setData(dummyData.default);
        };
    
        fetchData();
      }, []);
    
      // Chart.js data configuration
      const chartData = {
        labels: data.timestamps,
        datasets: [
          {
            label: "Balance",
            data: data.balance,
            borderColor: "#4F46E5", // Blue color
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            tension: 0.4,
            fill: true,
          },
          {
            label: "Equity",
            data: data.equity,
            borderColor: "#FB923C", // Orange color
            backgroundColor: "rgba(251, 146, 60, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      };
    
      // Chart.js options configuration
      const chartOptions = {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `$${context.raw.toLocaleString()}`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Time",
            },
          },
          y: {
            title: {
              display: true,
              text: "Amount (USD)",
            },
          },
        },
      };
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow-sm rounded-lg">
    {/* Header */}
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      Total Balance
    </h3>
    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
      Profit: {data.profit}
    </p>

    {/* Current Balance and Equity */}
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-blue-600 mr-2">
          ${data.currentBalance.toLocaleString()}
        </span>
        <span className="text-gray-500 text-sm">Balance</span>
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-bold text-orange-600 mr-2">
          ${data.currentEquity.toLocaleString()}
        </span>
        <span className="text-gray-500 text-sm">Equity</span>
      </div>
    </div>

    {/* Chart */}
    <div className="mt-6">
      <Line data={chartData} options={chartOptions} />
    </div>
  </div>
  )
}

export default Totalbalance