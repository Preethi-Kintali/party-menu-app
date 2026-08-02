import "../styles/filterbar.css";

function FilterBar({
  category,
  setCategory,
  diet,
  setDiet,
  search,
  setSearch,
  onSearch,
}) {
  const categories = ["all", "starter", "main", "sides", "desert"];
  const diets = ["all", "veg", "nonveg"];

  return (
    <div className="filter-container">

      {/* CATEGORY */}
      <div className="filter-section">
        <h4 className="filter-title">CATEGORY</h4>

        <div className="chip-group">
          {categories.map((item) => (
            <button
              key={item}
              className={`chip ${category === item ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* DIET */}
      <div className="filter-section">
        <h4 className="filter-title">DIET</h4>

        <div className="chip-group">
          {diets.map((item) => (
            <button
              key={item}
              className={`chip ${diet === item ? "active" : ""}`}
              onClick={() => setDiet(item)}
            >
              {item === "veg" && "🌿 "}
              {item === "nonveg" && "🍖 "}
              {item === "nonveg"
                ? "Non-Veg"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name (e.g. chicken)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterBar;