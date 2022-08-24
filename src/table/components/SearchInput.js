import "./searchInput.css";

export default function SearchInput({ onChange, value }) {
  return (
    <div className="card">
      <input
        className="search_input"
        value={value}
        onChange={(e) => {
          onChange(e.target?.value);
        }}
        placeholder="Search"
      />
    </div>
  );
}
