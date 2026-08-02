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

      <div className="category-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="diet-filters">
        {diets.map((item) => (
          <button
            key={item}
            className={diet === item ? "active" : ""}
            onClick={() => setDiet(item)}
          >
            {item === "nonveg" ? "Non-Veg" : item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={onSearch}>
          Search
        </button>
      </div>

    </div>
  );
}

export default FilterBar;
