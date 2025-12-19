import { useState } from "react";

const menus = [
  "Fixtures",
  "Points Table",
  "Upcoming Matches",
  "Team Info",
  "Statistics",
];

export default function Basketball() {
  const [activeMenu, setActiveMenu] = useState("Fixtures");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-gray-800">
            Cricket
          </h1>
          <p className="text-gray-500 text-sm">
            MSC Premier League
          </p>

          {/* Navbar */}
          <div className="flex gap-8 mt-6 border-b border-gray-200">
            {menus.map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className="relative pb-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              >
                {menu}

                {/* Underline */}
                {activeMenu === menu && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div
          key={activeMenu}
          className="
            bg-white rounded-lg shadow-sm min-h-[300px]
            flex items-center justify-center
            text-gray-400 text-lg
            animate-fadeIn
          "
        >
          {activeMenu} content will be loaded here
        </div>
      </div>
    </div>
  );
}
