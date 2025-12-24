import { useState } from "react";

import SportSelector from "../../components/admin/SportsSelector";
import CategorySelector from "../../components/admin/CategorySelector";
import Fixtures from "../../components/admin/Fixtures"
import AddTeam from "../../components/admin/AddTeam";
import Results from "../../components/admin/Results"

const menus = ["Add Team", "Create Fixtures", "Update Results"];

export default function AdminHome() {
  const [selectedSport, setSelectedSport] = useState("Cricket");
  const [selectedCategory, setSelectedCategory] = useState("Men");
  const [activeMenu, setActiveMenu] = useState("Add Team");

  const renderContent = () => {
    const commonProps = {
      sport: selectedSport,
      category: selectedCategory,
    };

    switch (activeMenu) {
      case "Add Team":
        return <AddTeam {...commonProps} />;
      case "Create Fixtures":
        return <Fixtures {...commonProps} />;
      case "Update Results":
        return <Results {...commonProps} />;
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
            MSC Premier League – Admin
          </h1>

          {/* Selectors */}
          <div className="flex gap-6 mt-4">
            <SportSelector
              value={selectedSport}
              onChange={setSelectedSport}
            />
            <CategorySelector
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          {/* Navbar */}
          <div className="flex gap-8 mt-6 border-b">
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
          key={`${selectedSport}-${selectedCategory}-${activeMenu}`}
          className="bg-white p-6 rounded-lg shadow animate-fadeIn"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
