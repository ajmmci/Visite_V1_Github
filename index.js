// ------------------ Sections ------------------
function toggleSection(id) {
  const sections = ["about","services","Réalisation","fileservice","CGV"];
  const hero = document.getElementById("hero");
  sections.forEach(sid => {
    const el = document.getElementById(sid);
    if(el) el.style.display = (sid === id) ? "block" : "none";
  });
  if(hero) hero.style.display = "none";
}

function showHome() {
  const sections = ["about","services","Réalisation","fileservice","CGV"];
  sections.forEach(sid => {
    const el = document.getElementById(sid);
    if(el) el.style.display = "none";
  });
  const hero = document.getElementById("hero");
  if(hero) hero.style.display = "block";
}

// ------------------ Popups ------------------
function openPopup(){ 
  const popup = document.getElementById("popupForm");
  if(popup) popup.style.display="flex";
}
function closePopup(){ 
  const popup = document.getElementById("popupForm");
  const confirm = document.getElementById("confirmationPopup");
  if(popup) popup.style.display="none";
  if(confirm) confirm.style.display="none";
}

function openPopupMS() {
   const popup = document.getElementById("textPopupMS");
   if(popup) popup.style.display = "flex";
}

function closePopupMS() {
    const popup = document.getElementById("textPopupMS");
    if(popup) popup.style.display = "none";
}

// ------------------ Prix et formulaire ------------------
document.addEventListener("DOMContentLoaded", function() {
  const requestType = document.getElementById("requestType");
  const rentBench = document.getElementById("rentBench");
  const gestionSection = document.getElementById("gestionOuverteOptions");
  const estimatedPriceEl = document.getElementById("estimatedPrice");
  const form = document.getElementById("requestForm");

  // ------------------ Calcul prix ------------------
  function updatePrice() {
    if(!requestType || !estimatedPriceEl || !gestionSection) return;

    const rt = requestType.value;
    const rent = rentBench ? rentBench.checked : false;

    let basePrice = 0;

    if (!rt) {
      gestionSection.style.display = "none";
      estimatedPriceEl.textContent = "Prix estimatif : --";
      return;
    }

    if(rt === "gestionOuverte") {
      basePrice = 300;
      gestionSection.style.display = "block";
      if(rent) basePrice += 250;
    } else if(rt === "300") basePrice = 300;
    else if(rt === "150") basePrice = 150;
    else basePrice = 0;

    estimatedPriceEl.textContent = `Prix estimatif : ${basePrice > 0 ? basePrice + "€" : "--"}`;
  }

  if(requestType) requestType.addEventListener("change", updatePrice);
  if(rentBench) rentBench.addEventListener("change", updatePrice);
  updatePrice();

  // ------------------ EmailJS ------------------
  if(typeof emailjs !== "undefined") {
    emailjs.init("tj78crzPN0_rmmjFS");
  }

  if(form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const data = {
        firstname: document.getElementById("firstname")?.value || "",
        lastname: document.getElementById("lastname")?.value || "",
        email: document.getElementById("email")?.value || "",
        brand: document.getElementById("brand")?.value || "",
        model: document.getElementById("model")?.value || "",
        requestType: requestType?.selectedOptions[0].text || "",
        description: document.getElementById("description")?.value || "",
        gestionBrand: document.getElementById("gestionBrand")?.value || "",
        rentBench: rentBench ? rentBench.checked : false
      };

      emailjs.send("service_bsoe5lw","template_y1s1oe6", data)
        .then(() => {
          closePopup();
          const confirm = document.getElementById("confirmationPopup");
          if(confirm) confirm.style.display = "flex";
        })
        .catch(() => {
          alert("Erreur lors de l'envoi du formulaire.");
        });
    });
  }
});
