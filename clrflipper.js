let btn = document.querySelector("#btn");
let bg = document.querySelector("main");
let color = document.querySelector(".colorName");

function generateColor() {
     let r = Math.floor(Math.random() * 256);
     let g = Math.floor(Math.random() * 256);
     let b = Math.floor(Math.random() * 256);

     return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", () => {
     let randomColor = generateColor();
     bg.style.backgroundColor = randomColor;
     color.innerText = randomColor;
});
