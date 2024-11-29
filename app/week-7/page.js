"use client";  

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state inside the component function
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-blue-950 p-5">
      <h1 className="ml-4 mb-2 text-3xl font-bold text-gray-200">
        Shopping List
      </h1>
      
      {/* Pass items as a prop to ItemList */}
      <ItemList items={items} />
      
      {/* Pass handleAddItem as onAddItem to NewItem */}
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
