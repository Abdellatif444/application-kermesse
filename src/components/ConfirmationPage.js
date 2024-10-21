import React, { useState } from "react";
import "./ConfirmationPage.css";
import jsPDF from "jspdf";
import logo from "../assets/club.png"; // Importer votre logo

const ConfirmationPage = ({ order, onConfirm }) => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);

  // Gestion de la confirmation et de l'envoi de PDF via WhatsApp
  const handleConfirm = () => {
    generateAndSendPDF(order, whatsappNumber);
    onConfirm(); // Passe à la page de succès
  };

  const generateAndSendPDF = (order, whatsappNumber) => {
    const doc = new jsPDF();

    // Ajouter l'image du logo dans le PDF
    const imgData = logo; // Utilisez l'image importée
    doc.addImage(imgData, "PNG", 85, 10, 40, 40); // Positionner le logo dans le PDF

    // Ajouter le texte en arabe
    doc.setFontSize(16);
    doc.text("La cuisine du social:", 105, 60, { align: "center" });
    doc.text("# kindness defines us", 105, 150, { align: "center" });

    // Centrer et ajouter les informations de la commande
    doc.setFontSize(12);
    doc.text(`Nom de l'enfant : ${order.name}`, 105, 80, { align: "center" });
    doc.text(`Âge de l'enfant : ${order.age}`, 105, 90, { align: "center" });
    doc.text(`Préférences alimentaires : ${order.preferences}`, 105, 100, {
      align: "center",
    });
    doc.text(`Repas choisi : ${order.meal.name}`, 105, 110, {
      align: "center",
    });

    // Générer le PDF en tant que fichier Blob
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url);

    // Envoyer via WhatsApp en utilisant l'API WhatsApp
    sendWhatsAppMessage(url, whatsappNumber);
  };

  const sendWhatsAppMessage = (pdfUrl, whatsappNumber) => {
    const message = `Votre commande a été enregistrée. Vous pouvez télécharger le PDF ici : ${pdfUrl}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="confirmation-page">
      <div className="background-image">
        <div className="confirmation-content">
          <h1>Confirmation de la commande</h1>
          <div className="order-details">
            <p>
              <strong>Nom de l'enfant :</strong> {order.name}
            </p>
            <p>
              <strong>Âge de l'enfant :</strong> {order.age}
            </p>
            <p>
              <strong>Préférences alimentaires :</strong> {order.preferences}
            </p>
            <p>
              <strong>Repas choisi :</strong> {order.meal.name}
            </p>
          </div>

          {/* Champ pour le numéro WhatsApp */}
          <div className="whatsapp-number">
            <label>Saisir le numéro WhatsApp :</label>
            <input
              type="tel"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="+212 6 12 34 56 78"
            />
          </div>

          {/* Bouton pour confirmer la commande */}
          <button className="confirm-button" onClick={handleConfirm}>
            Confirmer la commande et envoyer par WhatsApp
          </button>

          {/* Lien de téléchargement du PDF */}
          {pdfUrl && (
            <div className="download-link">
              <a href={pdfUrl} download="confirmation-commande.pdf">
                Télécharger le PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
