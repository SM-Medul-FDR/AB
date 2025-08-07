function goToWishPage() {
  window.location.href = "wish.html";
}

// 🎈 Balloon Generator
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

setInterval(createBalloon, 800);

// 🎈 Balloon CSS (Injected)
const style = document.createElement("style");
style.innerHTML = `
.balloon {
  width: 25px;
  height: 35px;
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 50% 50%;
  opacity: 0.7;
  animation: rise ease-in infinite;
}

@keyframes rise {
  0% { transform: translateY(0); opacity: 0.9; }
  100% { transform: translateY(-120vh); opacity: 0; }
}
`;
document.head.appendChild(style);
