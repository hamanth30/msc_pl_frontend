import { useState } from "react";
import SportsSelector from "../../components/admin/SportsSelector.jsx";
import AddNewTeam from "../../components/admin/AddTeam.jsx";
import CreateFixtures from "../../components/admin/Fixtures.jsx";
import UpdateResults from "../../components/admin/Results.jsx";

const menus = [
  "Add New Team",
  "Create Fixtures",
  "Update Match Results",
];

export default function AdminHome() {
  const [selectedSport, setSelectedSport] = useState("Cricket");
  const [activeMenu, setActiveMenu] = useState("Add New Team");

  const renderContent = () => {
    switch (activeMenu) {
      case "Add New Team":
        return <AddNewTeam sport={selectedSport} />;
      case "Create Fixtures":
        return <CreateFixtures sport={selectedSport} />;
      case "Update Match Results":
        return <UpdateResults sport={selectedSport} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-gray-800">
            MSC Premier League
          </h1>

          {/* Dropdown */}
          <div className="mt-4">
            <SportSelector
              value={selectedSport}
              onChange={setSelectedSport}
            />
          </div>

          {/* Navbar */}
          <div className="flex gap-8 mt-6 border-b border-gray-200">
            {menus.map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className="relative pb-3 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {menu}
                {activeMenu === menu && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div
          key={`${selectedSport}-${activeMenu}`}
          className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
