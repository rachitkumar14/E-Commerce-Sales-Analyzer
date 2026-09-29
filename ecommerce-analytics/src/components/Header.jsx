import { Search, Bell } from "lucide-react";

function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* Search */}
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        
        <button className="relative text-gray-500 hover:text-gray-800">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            R
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Sales Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;