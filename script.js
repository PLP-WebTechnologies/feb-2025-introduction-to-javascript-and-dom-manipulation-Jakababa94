// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically change text content
    const headerTitle = document.querySelector("header h1");
    headerTitle.textContent = "Welcome to ShoeXpress - Your Shoe Destination";

    // Modify CSS styles via JavaScript
    const nav = document.querySelector("nav");
    nav.style.backgroundColor = "#333";
    nav.style.color = "#fff";
    nav.style.padding = "10px";
    nav.style.borderRadius = "5px";

    // Add a button to toggle an element
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Promo Message";
    toggleButton.style.margin = "20px 0";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.cursor = "pointer";
    document.body.insertBefore(toggleButton, document.querySelector("footer"));

    // Add or remove an element when clicking the button
    const promoMessage = document.createElement("p");
    promoMessage.textContent = "Limited Time Offer: Get 20% off on all shoes!";
    promoMessage.style.display = "none";
    promoMessage.style.color = "red";
    promoMessage.style.fontWeight = "bold";
    document.body.insertBefore(promoMessage, document.querySelector("footer"));

    toggleButton.addEventListener("click", () => {
        if (promoMessage.style.display === "none") {
            promoMessage.style.display = "block";
        } else {
            promoMessage.style.display = "none";
        }
    });

    ;
});