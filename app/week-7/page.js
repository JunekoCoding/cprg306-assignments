"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

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
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="flex-1 lg:ml-4 mt-4 lg:mt-0">
          <ItemList items={items} onUpdateItem={handleUpdateItem} />
        </div>
      </div>
    </main>
  );
}