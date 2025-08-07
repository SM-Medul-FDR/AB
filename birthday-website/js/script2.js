function goBack() {
  window.location.href = "index.html";
}

// 🎁 Gift Box Surprise
function showSurprise() {
  const surprise = document.getElementById("surprise-message");
  surprise.classList.remove("hidden");
}

// 🎈 Balloon Generator (same as before)
const balloonContainer = document.getElementById("balloon-container");

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = `${random(0, 100)}vw`;
  balloon.style.animationDuration = `${random(3, 6)}s`;
  balloon.style.backgroundColor = `hsl(${random(0, 360)}, 70%, 60%)`;
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

setInterval(createBalloon, 900);
