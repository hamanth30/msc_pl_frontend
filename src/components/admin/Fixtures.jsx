import { useState } from "react";

export default function Fixtures({ sport, category }) {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-xl font-semibold">
        Create {category} {sport} Fixture
      </h2>

      <input
        placeholder="Team A"
        className="w-full border rounded px-3 py-2"
        value={teamA}
        onChange={(e) => setTeamA(e.target.value)}
      />

      <input
        placeholder="Team B"
        className="w-full border rounded px-3 py-2"
        value={teamB}
        onChange={(e) => setTeamB(e.target.value)}
      />

      <input
        type="datetime-local"
        className="w-full border rounded px-3 py-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Fixture
      </button>
    </div>
  );
}
