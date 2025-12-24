export default function SportSelector({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600">Sport</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-1.5 text-sm"
      >
        <option value="Cricket">Cricket</option>
        <option value="Football">Football</option>
        <option value="Basketball">Basketball</option>
        <option value="Volleyball">Volleyball</option>
      </select>
    </div>
  );
}
