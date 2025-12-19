import { useNavigate } from "react-router-dom";

export default function UserHome() {
  const navigate = useNavigate();

  const sports = [
    { name: "Cricket", path: "/cricket" },
    { name: "Basketball", path: "/basketball" },
    { name: "Football", path: "/football" },
    { name: "Volleyball", path: "/volleyball" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 text-gray-800">
        MSC Premier League
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mb-10">
        Choose Sports
      </p>

      {/* Sports Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {sports.map((sport, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle */}
            <div
              onClick={() => navigate(sport.path)}
              className="
                w-32 h-32 rounded-full bg-gray-300
                flex items-center justify-center
                cursor-pointer
                transform transition-all duration-300
                hover:scale-110 hover:rotate-6
                hover:shadow-xl
              "
            >
              <span className="text-gray-600 font-medium">
                Image
              </span>
            </div>

            {/* Sport Name */}
            <p className="mt-3 text-lg font-semibold text-gray-700">
              {sport.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
