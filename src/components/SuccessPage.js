import React from 'react';
import './SuccessPage.css'; // Assurez-vous de créer ce fichier CSS pour gérer les styles

const SuccessPage = () => {
  return (
    <div className="success-page">
      {/* Image de fond */}
      <div className="background-image">
        <div className="success-content">
          <h1>Fin</h1>
          <div className="success-message">
            <h2>Merci ! 😊</h2>
            <p>Votre commande a bien été enregistrée.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
