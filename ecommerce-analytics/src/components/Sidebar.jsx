import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Orders",
    icon: ShoppingCart,
  },
  {
    name: "Products",
    icon: Package,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    icon: FileText,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar text-white flex flex-col">
      
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-xl font-bold">
          Smart E-Commerce
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Sales Analyzer
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <p className="text-xs uppercase text-gray-500 font-semibold px-3 mb-3">
          Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                  item.active
                    ? "bg-sidebar-active text-white"
                    : "text-gray-300 hover:bg-sidebar-hover"
                }`}
              >
                <Icon size={19} />

                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
            R
          </div>

          <div>
            <p className="text-sm font-medium">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;