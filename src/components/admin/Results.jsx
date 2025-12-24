import { useState } from "react";

export default function Results({ sport, category }) {
  const [matchId, setMatchId] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-xl font-semibold">
        Update {category} {sport} Results
      </h2>

      <input
        placeholder="Match ID"
        className="w-full border rounded px-3 py-2"
        value={matchId}
        onChange={(e) => setMatchId(e.target.value)}
      />

      <input
        placeholder="Result (eg: Team A won)"
        className="w-full border rounded px-3 py-2"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Update Result
      </button>
    </div>
  );
}
