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
  const estimatedPriceEl
