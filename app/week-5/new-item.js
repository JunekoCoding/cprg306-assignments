"use client";

import { useState } from "react";

export function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = { name, quantity, category };

    // Log the new item to the console
    console.log({ name, quantity, category });

    // Display an alert with state of new item
    alert(`New item: ${name}, ${quantity}, ${category}`);

    // Reset the form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 20 ? prevQuantity + 1 : prevQuantity
    );
  };

  const decrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      {/* Name */}
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Item Name
        </label>
        <input
          required
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter item name"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-lg text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Quantity Controls */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center justify-between p-2 outline rounded-md shadow-sm">
          {/* Numerical Value */}
          <span className="text-lg font-medium text-gray-700">{quantity}</span>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-4 py-2 font-bold text-white bg-blue-400 rounded-md disabled:bg-gray-400 hover:bg-blue-500"
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-4 py-2 font-bold text-white bg-blue-400 rounded-md disabled:bg-gray-400 hover:bg-blue-500"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-400 rounded-md hover:bg-blue-500"
      >
        Add Item
      </button>
    </form>
  );
}
