// Affichage des sections
function toggleSection(id) {
    const sections = ["about", "services", "fileservice", "Réalisation","CGV"];
    const hero = document.getElementById("hero");

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        section.style.display = (sectionId === id) ? "block" : "none";
    });

    // Masquer l'accueil
    hero.style.display = "none";
}

function showHome() {
    const sections = ["about", "services", "fileservice", "Réalisation","CGV"];
    sections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = "none";
    });
    document.getElementById("hero").style.display = "block";
}

// Pop-up
function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("confirmationPopup").style.display = "none";
}

// Pop-up MS
function openPopupMS() {
    document.getElementById("textPopupMS").style.display = "flex";
}

function closePopupMS() {
    document.getElementById("textPopupMS").style.display = "none";
}

// Mise à jour du prix
// Tableau des prix de base selon le type de demande

// Fonction pour mettre à jour le prix estimatif
function updatePrice() {
  const requestType = document.getElementById("requestType").value;
  const rentBench = document.getElementById("rentBench").checked;
  let price = 0;

  // Définition du prix de base selon le type de demande
  switch (requestType) {
    case "gestionOuverte":
      price = 300;
      break;
    case "MS42MS43":
      price = 300;
      break;
    case "diagnostic":
      price = 150;
      break;
    case "autre":
      price = 0;
      break;
    default:
      price = 0;
  }

  // Ajout du coût de la location du banc si sélectionnée
  if (rentBench) {
    price += 250;
  }

  // Affichage du prix estimatif
  document.getElementById("estimatedPrice").textContent = `Prix estimatif : ${price}€`;
}

// Fonction pour afficher ou masquer la section "gestion ouverte"
function toggleGestionOuverte() {
  const gestionOuverteSection = document.getElementById("gestionOuverteOptions");
  const requestType = document.getElementById("requestType").value;

  if (requestType === "gestionOuverte") {
    gestionOuverteSection.style.display = "block";
  } else {
    gestionOuverteSection.style.display = "none";
  }
}

// Ajout d'écouteurs d'événements pour mettre à jour le prix et afficher/masquer la section "gestion ouverte"
document.getElementById("requestType").addEventListener("change", () => {
  updatePrice();
  toggleGestionOuverte();
});

document.getElementById("rentBench").addEventListener("change", updatePrice);

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  updatePrice();
  toggleGestionOuverte();
});

// --- Cacher la section au chargement ---
window.addEventListener("DOMContentLoaded", () => {
  const gestionOuverteOptions = document.getElementById("gestionOuverteOptions");
  gestionOuverteOptions.style.display = "none";
});

// Exécuter au chargement pour cacher par défaut
window.addEventListener("DOMContentLoaded", () => {
    const gestionOuverteOptions = document.getElementById("gestionOuverteOptions");
    gestionOuverteOptions.style.display = "none"; // caché par défaut
});


// Email (avec EmailJS)
function handleForm(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const requestType = document.getElementById("requestType").selectedOptions[0].text;
    const description = document.getElementById("description").value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        firstname, lastname, email, brand, model, requestType, description
    }).then(() => {
        closePopup();
        document.getElementById("confirmationPopup").style.display = "flex";
    }).catch(() => {
        alert("Erreur lors de l'envoi du formulaire.");
    });
}



