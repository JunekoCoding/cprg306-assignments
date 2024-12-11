"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/[^a-zA-Z\s]/g, '')
      .trim();
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <main className="bg-blue-950 p-5">
      <h1 className="ml-4 mb-2 text-3xl font-bold text-gray-200">
        Shopping List
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* New Item Section */}
        <div className="lg:w-1/4">
          <NewItem onAddItem={handleAddItem} />
        </div>

        {/* Item List Section */}
        <div className="flex-1 lg:ml-4 mt-4 lg:mt-0">
          <ItemList items={items} onUpdateItem={handleUpdateItem} onSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas Section */}
        <div className="lg:w-1/4 lg:ml-4 mt-4 lg:mt-0">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
