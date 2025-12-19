import { useState } from "react";

export default function UpdateResults({ sport }) {
  const [matchId, setMatchId] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      sport,
      match_id: matchId,
      result,
    };

    console.log("Update Result Payload:", payload);
    // TODO: API call
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Update {sport} Match Result
      </h2>

      <input
        type="text"
        placeholder="Match ID"
        value={matchId}
        onChange={(e) => setMatchId(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <input
        type="text"
        placeholder="Result (eg: Team A won)"
        value={result}
        onChange={(e) => setResult(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update Result
      </button>
    </form>
  );
}
