import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import StatCard from "./components/StartCard";
import MonthlySalesTrendChart from "./components/MonthlySalesTrendChart";
import TopCategoriesChart from "./components/TopCategoriesChart";

import {
  salesStats,
  monthlySales,
  categoryData,
} from "./data/dashboardData";

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">
        
        {/* Header */}
        <Header />

        {/* Dashboard */}
        <main className="p-6">
          
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              E-Commerce Analytics Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor your sales performance and business insights.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {salesStats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
              />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Monthly Sales */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Monthly Sales Trend
              </h2>

              <p className="text-sm text-gray-500 mt-1 mb-5">
                Sales performance throughout the year
              </p>

              <MonthlySalesTrendChart data={monthlySales} />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Top Categories
              </h2>

              <p className="text-sm text-gray-500 mt-1 mb-5">
                Category-wise sales distribution
              </p>

              <TopCategoriesChart data={categoryData} />
            </div>
          </div>

          {/* Business Insights */}
          <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Business Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Highest Sales Month
                </p>

                <p className="text-xl font-bold text-gray-800 mt-1">
                  December
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Top Category
                </p>

                <p className="text-xl font-bold text-gray-800 mt-1">
                  Electronics
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-sm text-gray-500">
                  Sales Growth
                </p>

                <p className="text-xl font-bold text-green-600 mt-1">
                  +12%
                </p>
              </div>

            </div>
          </div>

          {/* AI Report */}
          <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
            
            <div className="flex items-center justify-between">
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  AI Sales Report
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Generate AI-powered insights from your sales data.
                </p>
              </div>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Generate Report
              </button>

            </div>

            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                AI-generated sales analysis will appear here.
              </p>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default App;