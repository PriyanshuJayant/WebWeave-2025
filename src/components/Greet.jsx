import React from "react";
import "./Greet.scss";

function Greet() {
  return (
    <div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div class="animation-container">
          <div class="hello-text" id="helloText">
            Hello
          </div>
          <div class="animated-text" id="animatedText">
            Meet the <br /> Online Store, again
          </div>
          <button class="action-button" id="actionButton">
            →
          </button>
        </div>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
}

export default Greet;

//Aurora — the glow of next-gen shopping.
// Meet your Online Store, again
function startAnimation() {
  const helloText = document.getElementById("helloText");
  const mainText = document.getElementById("animatedText");
  const button = document.getElementById("actionButton");

  // Reset all animations
  helloText.classList.remove("animate-hello");
  mainText.classList.remove("animate-main");
  button.classList.remove("animate-button");

  // Reset positions and opacity
  helloText.style.opacity = "0";
  helloText.style.transform = "translateY(100px)";

  mainText.style.opacity = "0";
  mainText.style.transform = "translateY(100px)";

  button.style.opacity = "0";
  button.style.transform = "translateY(20px)";

  // Force reflow
  void helloText.offsetHeight;

  // Start all animations (they have their own delays)
  setTimeout(() => {
    helloText.classList.add("animate-hello");
    mainText.classList.add("animate-main");
    button.classList.add("animate-button");
  }, 100);
}

function restartAnimation() {
  startAnimation();
}

// Auto-start animation when page loads
window.addEventListener("load", () => {
  setTimeout(startAnimation, 500);
});

// Auto-restart every 12 seconds for demo
setInterval(() => {
  startAnimation();
}, 12000);
