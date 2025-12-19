import { useState } from "react";

export default function CreateFixtures({ sport }) {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      sport,
      teamA,
      teamB,
      date,
    };

    console.log("Create Fixture Payload:", payload);
    // TODO: API call
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Create {sport} Fixture
      </h2>

      <input
        type="text"
        placeholder="Team A"
        value={teamA}
        onChange={(e) => setTeamA(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <input
        type="text"
        placeholder="Team B"
        value={teamB}
        onChange={(e) => setTeamB(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Fixture
      </button>
    </form>
  );
}
