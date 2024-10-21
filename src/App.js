import React, { useState } from 'react';
import HomePage from './components/HomePage'; // Page d'accueil
import MealCatalog from './components/MealCatalog'; // Catalogue de repas
import OrderForm from './components/OrderForm'; // Formulaire de commande
import ConfirmationPage from './components/ConfirmationPage'; // Page de confirmation
import SuccessPage from './components/SuccessPage'; // Page de succès

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Page actuelle
  const [selectedMeal, setSelectedMeal] = useState(null); // Repas sélectionné
  const [order, setOrder] = useState(null); // Commande (nom, âge, etc.)

  // Fonction pour démarrer et aller à la page du catalogue
  const handleStart = () => setCurrentPage('catalog');

  // Fonction pour sélectionner un repas et aller à la page de commande
  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    setCurrentPage('order');
  };

  // Fonction pour soumettre la commande et aller à la page de confirmation
  const handleSubmitOrder = (orderDetails) => {
    setOrder(orderDetails);
    setCurrentPage('confirmation');
  };

  // Fonction pour confirmer la commande et aller à la page de succès
  const handleConfirm = () => {
    setCurrentPage('success');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onStart={handleStart} />}
      {currentPage === 'catalog' && <MealCatalog onSelectMeal={handleSelectMeal} />}
      {currentPage === 'order' && <OrderForm selectedMeal={selectedMeal} onSubmitOrder={handleSubmitOrder} />}
      {currentPage === 'confirmation' && <ConfirmationPage order={order} onConfirm={handleConfirm} />}
      {currentPage === 'success' && <SuccessPage />}
    </div>
  );
}

export default App;
