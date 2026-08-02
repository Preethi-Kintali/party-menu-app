import { useEffect, useState } from "react";

import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";

import { filterMenuItems } from "../data/menuData";

function Menu() {

  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");
  const [searchText, setSearchText] = useState("");

  const [filteredItems, setFilteredItems] = useState(
    filterMenuItems({
      category: "all",
      diet: "all",
      name: "",
    })
  );

  function handleSearch() {
    setFilteredItems(
      filterMenuItems({
        category,
        diet,
        name: searchText,
      })
    );
  }

  useEffect(() => {
    setFilteredItems(
      filterMenuItems({
        category,
        diet,
        name: searchText,
      })
    );
  }, [category, diet]);

  return (
    <div>

      <Header />

      <FilterBar
        category={category}
        setCategory={setCategory}
        diet={diet}
        setDiet={setDiet}
        search={searchText}
        setSearch={setSearchText}
        onSearch={handleSearch}
      />

      <h3>{filteredItems.length} items found</h3>

      {filteredItems.length === 0 ? (
        <p>No dishes found. Try different filters.</p>
      ) : (
        <div>
          {filteredItems.map(item => (
            <FoodCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Menu;