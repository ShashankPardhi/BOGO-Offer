document.addEventListener("DOMContentLoaded", function () {
  // Select all radio buttons
  const radioButtons = document.querySelectorAll('input[name="units"]');
  const totalPriceElement = document.getElementById("total-price");

  // Store the last selected radio button
  let lastSelectedRadio = null;

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      // If the radio button is checked, highlight the card and show the dropdown
      const selectedCard = this.closest(".card1, .card2, .card3");

      // Remove the highlight and hide all dropdowns from all cards
      document.querySelectorAll(".card1, .card2, .card3").forEach((card) => {
        card.classList.remove("selected");
        card.querySelector(".dropdowns").classList.remove("active");
      });

      // Add yellow border to the selected card
      selectedCard.classList.add("selected");

      // Show the dropdown for the selected card
      selectedCard.querySelector(".dropdowns").classList.add("active");

      // Update the total price based on the selected card's price
      const selectedPrice = selectedCard.querySelector(".price").textContent;
      totalPriceElement.textContent = selectedPrice;

      // Store the last selected radio button for future deselection
      lastSelectedRadio = this;
    });
  });

  // Handle deselection by clicking the same radio button
  radioButtons.forEach((radio) => {
    radio.addEventListener("click", function () {
      if (this === lastSelectedRadio) {
        // Deselect the radio button if clicked again
        this.checked = false;
        lastSelectedRadio = null;

        // Reset the total price and remove any highlights
        totalPriceElement.textContent = "$0.00";
        document.querySelectorAll(".card1, .card2, .card3").forEach((card) => {
          card.classList.remove("selected");
          card.querySelector(".dropdowns").classList.remove("active");
        });
      }
    });
  });
});
