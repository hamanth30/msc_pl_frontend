import { useState } from "react";

export default function AddNewTeam({ sport }) {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      sport,
      team_name: teamName,
      players: players.split(",").map(p => p.trim()),
      logo,
    };

    console.log("Add Team Payload:", payload);
    // TODO: API call
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Add New {sport} Team
      </h2>

      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <input
        type="file"
        onChange={(e) => setLogo(e.target.files[0])}
        className="w-full border rounded px-3 py-2"
      />

      <textarea
        placeholder="Team Members (comma separated)"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Team
      </button>
    </form>
  );
}
