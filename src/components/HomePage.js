import React from 'react';
import './HomePage.css'; // Nous allons utiliser un fichier CSS pour styliser le bouton et l'image.
import backgroundImage from '../components/background_acceuil.png'; // Importez l'image correctement


const HomePage =({ onStart })=>{
             return(
                     <div className="home-container">
                        {backgroundImage}    
                            <div className="background-image">
                                   <div className="button-container">
                                   <button className="start-button" onClick={onStart}>Voir les repas disponibles</button>
                                   </div>
                            </div>
                     </div>
                     
                    
                     
                   );
};
export default HomePage;

