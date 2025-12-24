import { useState } from "react";
// import axios from "axios";

export default function AddTeam({ sport, category }) {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState([
    { name: "", jerseyNo: "", position: "" },
  ]);

  const addPlayer = () => {
    setPlayers([...players, { name: "", jerseyNo: "", position: "" }]);
  };

  const updatePlayer = (index, field, value) => {
    const updated = [...players];
    updated[index][field] = value;
    setPlayers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      sport,
      category,
      team: { name: teamName },
      players: players.map((p) => ({
        name: p.name,
        jersey_no: Number(p.jerseyNo),
        position: p.position,
      })),
    };

    console.log("POST /teams", payload);
    // await axios.post("/api/admin/teams", payload);
  };

  return (
    <form className="space-y-6 max-w-2xl" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">
        Add {category} {sport} Team
      </h2>

      <input
        placeholder="Team Name"
        className="w-full border rounded px-3 py-2"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        required
      />

      {players.map((p, i) => (
        <div key={i} className="grid grid-cols-3 gap-3">
          <input
            placeholder="Player Name"
            className="border px-2 py-1 rounded"
            value={p.name}
            onChange={(e) => updatePlayer(i, "name", e.target.value)}
            required
          />
          <input
            placeholder="Jersey No"
            type="number"
            className="border px-2 py-1 rounded"
            value={p.jerseyNo}
            onChange={(e) => updatePlayer(i, "jerseyNo", e.target.value)}
            required
          />
          <input
            placeholder="Position"
            className="border px-2 py-1 rounded"
            value={p.position}
            onChange={(e) => updatePlayer(i, "position", e.target.value)}
            required
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addPlayer}
        className="text-blue-600 text-sm"
      >
        + Add Player
      </button>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Team
      </button>
    </form>
  );
}
