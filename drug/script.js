const toggleButton = document.getElementById("toggleLocations");
const locationsDiv = document.getElementById("locations");

toggleButton.addEventListener("click", function () {
  locationsDiv.classList.toggle("hidden");

  if (locationsDiv.classList.contains("hidden")) {
    toggleButton.textContent = "Show Locations";
  } else {
    toggleButton.textContent = "Hide Locations";
  }
});
