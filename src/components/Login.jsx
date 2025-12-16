import { useState } from "react";

export default function Login() {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo || !password) {
      alert("Please enter roll number and password");
      return;
    }

    console.log({ rollNo, password });
    alert("Login submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
