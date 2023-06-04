import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const displayedItems = itemsToDisplay.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
