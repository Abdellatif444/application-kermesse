import React, { useState } from 'react';
import './OrderForm.css'; // Importer le fichier CSS pour styliser l'image de fond et le formulaire

const OrderForm = ({ selectedMeal, onSubmitOrder }) => {
  // États pour gérer les champs du formulaire
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [preferences, setPreferences] = useState('');

  // Fonction pour soumettre la commande
  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction onSubmitOrder pour envoyer les données à la page suivante
    onSubmitOrder({ name, age, preferences, meal: selectedMeal });
  };

  return (
    <div className="order-form-container">
      {/* Image de fond */}
      <div className="background-image">
        <div className="form-content">
          <h1>Commander {selectedMeal.name}</h1>
          <form onSubmit={handleSubmit}>
            {/* Champ Nom de l'enfant */}
            <div className="form-group">
              <label htmlFor="name">Nom de l'enfant :</label>
              <input
                type="text"
                value={name}
                id="name" 
                autocomplete="name" // Ajout de l'attribut autocomplete
                onChange={(e) => setName(e.target.value)}
                placeholder="Saisir le nom de l'enfant"
                required
              />
            </div>

            {/* Champ Âge */}
            <div className="form-group">
              <label htmlFor="age">Âge de l'enfant :</label>
              <input
                type="number"
                value={age}
                id="age"
                autocomplete="bday" // Ajout de l'attribut autocomplete
                onChange={(e) => setAge(e.target.value)}
                placeholder="Sélectionner l'âge"
                required
              />
            </div>

            {/* Préférences alimentaires */}
            <div className="form-group">
              <label htmlFor="preferences">Préférences alimentaires :</label>
              <input
                type="text"
                value={preferences}
                id="preferences"
                autocomplete="off" // Désactivation de l'autocomplétion si non nécessaire
                onChange={(e) => setPreferences(e.target.value)}
                placeholder="Indiquez les préférences ou allergies"
              />
            </div>

            {/* Bouton de validation */}
            <button type="submit" className="submit-button">
              Valider la commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
