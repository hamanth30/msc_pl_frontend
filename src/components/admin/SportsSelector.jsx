export default function SportSelector({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-gray-500">
        Select Sport:
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          border border-gray-300 rounded-md
          px-3 py-1.5 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        <option value="Cricket">Cricket</option>
        <option value="Football">Football</option>
        <option value="Basketball">Basketball</option>
        <option value="Volleyball">Volleyball</option>
      </select>
    </div>
  );
}
