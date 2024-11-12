// Function to open the sidebar
function openMenu() {
  document.getElementById("sidebar").style.width = "250px"; // Open sidebar
  const openButton = document.querySelector(".openbtn");
  openButton.classList.add("hidden"); // Hide Explore button
  openButton.classList.add("disabled"); // Add disabled class to Explore button
  document.addEventListener("click", closeSidebarOnClickOutside); // Add click event listener for outside click
}

// Function to close the sidebar
function closeMenu() {
  document.getElementById("sidebar").style.width = "0"; // Close sidebar
  const openButton = document.querySelector(".openbtn");
  openButton.classList.remove("hidden"); // Show Explore button again
  openButton.classList.remove("disabled"); // Remove disabled class from Explore button
  document.removeEventListener("click", closeSidebarOnClickOutside); // Remove outside click listener
}

// Function to check if the click was outside the sidebar
function closeSidebarOnClickOutside(event) {
  const sidebar = document.getElementById("sidebar");
  const openButton = document.querySelector(".openbtn");

  // Check if the click was outside of sidebar and open button
  if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
    closeMenu(); // Close sidebar if clicked outside
  }
}


// Function to create a card
function createCard(crop) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${crop.img}" alt="${crop.name} image" class="card-img">
    <div class="card-body">
      <h3 class="card-title">${crop.name}</h3>
      <p class="card-info">Ideal pH: ${crop.pH}</p>
      <p class="card-description">${crop.description}</p>
      <button class="card-button">Learn More</button>
    </div>
  `;

  // Attach click event listener to open the fullscreen view
  card.addEventListener("click", function() {
    openFullscreen(crop);
  });

  return card;
}

// Function to open the fullscreen view
function openFullscreen(crop) {
  const fullscreenCard = document.getElementById("fullscreen-card");
  fullscreenCard.classList.remove("hidden"); // Show the fullscreen card

  // Populate the fullscreen modal with crop details
  document.getElementById("fullscreen-img").src = crop.img;
  document.getElementById("fullscreen-title").textContent = crop.name;
  document.getElementById("fullscreen-pH").textContent = `Ideal pH: ${crop.pH}`;
  document.getElementById("fullscreen-description").textContent = crop.description;
}

// Function to close the fullscreen view
function closeFullscreen() {
  const fullscreenCard = document.getElementById("fullscreen-card");
  fullscreenCard.classList.add("hidden"); // Hide the fullscreen card
}

// Function to fetch crop data and populate the cards
async function populateCards() {
  const container = document.getElementById("card-container");

  // Example crop data
  const crops = [
    {
      "name": "Tomato",
      "img": "https://cdn.pixabay.com/photo/2014/09/04/20/15/tomato-435867_1280.jpg",
      "pH": "6.0 - 6.8",
      "description": "Tomatoes prefer slightly acidic soils. Maintaining the correct pH improves fruit development and nutrient uptake."
    },
    {
      "name": "Carrot",
      "img": "https://cdn.pixabay.com/photo/2018/03/12/12/01/food-3219467_1280.jpg",
      "pH": "5.5 - 7.0",
      "description": "Carrots can tolerate a wider pH range, but optimal growth occurs in slightly acidic to neutral soils."
    },
    {
      "name": "Strawberry",
      "img": "https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875_1280.jpg",
      "pH": "5.5 - 6.5",
      "description": "Strawberries thrive in more acidic soils, which helps with better fruit yield and flavor."
    }
  ];

  // Create and append cards to the container
  crops.forEach(crop => {
    const card = createCard(crop);
    container.appendChild(card);
  });
}

// Call populateCards on page load
window.onload = populateCards;

