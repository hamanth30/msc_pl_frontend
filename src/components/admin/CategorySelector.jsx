export default function CategorySelector({ value, onChange }) {
    return (
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Category</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-3 py-1.5 text-sm"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
    );
  }
  