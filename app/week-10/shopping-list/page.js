"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth(); // Get user from AuthContext
  const [items, setItems] = useState([]); // State to store the items
  const [selectedIngredient, setSelectedIngredient] = useState(""); // State for selected ingredient

  // Function to load items from Firestore
  const loadItems = async () => {
    if (user) {
      const itemsData = await getItems(user.uid); // Get items for the logged-in user
      setItems(itemsData); // Set the state with fetched items
    }
  };

  // useEffect to load items when the component is mounted
  useEffect(() => {
    if (user) {
      loadItems(); // Call loadItems to fetch data if the user is logged in
    }
  }, [user]); // Dependency array: re-run when user changes

  // Handle adding a new item to the shopping list
  const handleAddItem = async (item) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, item); // Add item to Firestore
        // After the item is added, update the state to reflect the new item
        setItems((prevItems) => [
          ...prevItems,
          { ...item, id: newItemId }, // Add the new item with the returned ID
        ]);
      } catch (error) {
        console.error("Error adding item: ", error);
      }
    }
  };

  // Handle updating an item in the shopping list
  const handleUpdateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  // Handle selecting an item to get meal ideas
  const handleSelectItem = (name) => {
    setSelectedIngredient(name);
  };

  return (
    <div className="bg-gray-800 p-4 min-h-screen">
      <h1 className="text-white text-xl font-bold mb-4">Shopping List</h1>
      {user ? (
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onUpdateItem={handleUpdateItem} onSelect={handleSelectItem} />
          {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
        </div>
      ) : (
        <p className="text-white">Please log in to see your shopping list.</p>
      )}
    </div>
  );
}