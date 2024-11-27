"use client";

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <label
        htmlFor="sort-by"
        className="text-gray-200 text-md font-bold p-4"
      >
        Sort By:
      </label>
      <button
        onClick={() => setSortBy("name")}
        className={`bg-orange-700 rounded-sm mr-2 ${sortBy === "name" ? "bg-orange-500" : ""}`}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`bg-orange-700 rounded-sm mr-2 ${sortBy === "category" ? "bg-orange-500" : ""}`}
      >
        Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}