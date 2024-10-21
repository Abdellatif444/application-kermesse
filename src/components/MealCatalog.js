import React from 'react';
import './MealCatalog.css'; // Importer le CSS pour styliser le background

const meals = [
  { id: 1, name: 'Sandwich au Poulet Grillé', price: 25 },
  { id: 2, name: 'Pizza Margherita', price: 30 },
  { id: 3, name: 'Salade de Fruits Frais', price: 15 },
  { id: 4, name: 'Mini Burgers', price: 28 },
  { id: 5, name: 'Nuggets de Poulet', price: 20 },
  { id: 6, name: 'Jus d’Orange Frais', price: 10 }
];

const MealCatalog = ({ onSelectMeal }) => {
  return (
    <div className="meal-catalog-background">
      <div className="meal-catalog-container">
        <h1>Sélectionnez un repas</h1>
        <ul className="meal-list">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <div className="meal-details">
                <h2>{meal.name}</h2>
                <p>Prix : {meal.price} MAD</p>
              </div>
              <button className="order-button" onClick={() => onSelectMeal(meal)}>
                Commander
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealCatalog;
