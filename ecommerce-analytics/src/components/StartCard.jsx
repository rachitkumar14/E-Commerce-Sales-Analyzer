import {
  TrendingUp,
  ShoppingCart,
  Package,
  Boxes,
} from "lucide-react";

const icons = {
  "Total Sales": TrendingUp,
  "Total Orders": ShoppingCart,
  "Total Products": Package,
  "Total Quantity": Boxes,
};

function StatCard({ title, value, change }) {
  const Icon = icons[title] || TrendingUp;

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      
      <div className="flex items-start justify-between">
        
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <Icon size={22} />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm font-medium text-green-600">
          {change}
        </span>

        <span className="text-xs text-gray-500">
          vs last month
        </span>
      </div>
    </div>
  );
}

export default StatCard;