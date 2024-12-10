"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onUpdateItem, onSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <label htmlFor="sort-by" className="text-gray-200 text-md font-bold p-4">
        Sort By:
      </label>
      <button
        onClick={() => setSortBy("name")}
        className={`bg-orange-500 rounded-sm mr-2 ${
          sortBy === "name" ? "bg-orange-700" : ""
        }`}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`bg-orange-500 rounded-sm mr-2 ${
          sortBy === "category" ? "bg-orange-700" : ""
        }`}
      >
        Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onUpdateItem={onUpdateItem} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}