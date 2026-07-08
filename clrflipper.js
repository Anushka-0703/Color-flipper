const btn = document.querySelector("#btn");
const bg = document.querySelector("main");
const color = document.querySelector(".colorName");
const hexBtn = document.getElementById("hex-btn");
const rgbBtn = document.getElementById("rgb-btn");

let mode = "hex"; // default mode

// Random HEX
function getRandomHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Random RGB
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Flip color based on mode
function flipColor() {
    let newColor = mode === "hex" ? getRandomHex() : getRandomRGB();
    bg.style.backgroundColor = newColor;
    color.innerText = newColor;
}

btn.addEventListener("click", flipColor);
hexBtn.addEventListener("click", () => (mode = "hex"));
rgbBtn.addEventListener("click", () => (mode = "rgb"));
