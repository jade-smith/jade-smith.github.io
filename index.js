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






