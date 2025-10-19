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
const prices = {
  "0": 300,       // Gestion ouverte
  "300": 300,     // Calculateur MS42/MS43
  "150": 150,     // Diagnostic
  "autre": 0      // Autre
};

// Fonction principale
function updatePrice() {
  const requestType = document.getElementById("requestType").value;

  const gestionOuverteOptions = document.getElementById("gestionOuverteOptions");
  const rentBenchCheckbox = document.getElementById("rentBench");

  // --- Gestion de l'affichage ---
  if (requestType === "0") { // Gestion ouverte
    gestionOuverteOptions.style.display = "block";
  } else {
    gestionOuverteOptions.style.display = "none";
    if (rentBenchCheckbox) rentBenchCheckbox.checked = false; // Désélectionner si masqué
  }

  // --- Calcul du prix ---
  let price = prices[requestType] || 0; // Prix de base selon la sélection
  if (rentBenchCheckbox && rentBenchCheckbox.checked) {
    price += 250; // Ajout du prix du banc si coché
  }

  // --- Affichage du prix estimatif ---
  document.getElementById("estimatedPrice").textContent = `Prix estimatif : ${price}€`;
}

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
