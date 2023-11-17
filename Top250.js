// Get elements
var icon = document.getElementById("icon");
var popup = document.getElementById("myPopup");
var close = document.getElementsByClassName("close")[0];

// Open popup
icon.onclick = function() {
  popup.style.display = "block";
}

// Close popup 
close.onclick = function() {
  popup.style.display = "none";
}

// Close if click outside
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}