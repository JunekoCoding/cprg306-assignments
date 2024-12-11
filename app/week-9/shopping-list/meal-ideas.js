"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null); // State for selected meal

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.meals;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function loadMealIdeas() {
    try {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData || []);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  if (error)
    return (
      <div>
        <h2>Meal Ideas</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div style={{ display: "flex", gap: "20px" }}> {/* Flex container */}
      <div style={{ flex: 1 }}> {/* List of items */}
        <h2>Meal Ideas</h2>
        {meals.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                style={{
                  border: "1px solid black",
                  borderRadius: "4px",
                  padding: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMeal(meal)} // Set selected meal on click
              >
                {meal.strMeal}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div style={{ flex: 2, border: "1px solid black", padding: "10px", borderRadius: "4px" }}> {/* Meal details */}
        <h2>Selected Meal</h2>
        {selectedMeal ? (
          <div>
            <h3>{selectedMeal.strMeal}</h3>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ maxWidth: "100%" }} />
            <p>ID: {selectedMeal.idMeal}</p>
          </div>
        ) : (
          <p>Please select a meal from the list.</p>
        )}
      </div>
    </div>
  );
}
