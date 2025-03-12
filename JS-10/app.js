let generateRandom = () => Math.floor(Math.random() * 255);
let generateRGB = () => [generateRandom(), generateRandom(), generateRandom()];
console.log(generateRGB());

let btn = document.querySelector("button");
btn.onclick = () => {
  let randomColor = generateRGB();

  let h1 = document.querySelector("h1");
  h1.innerText = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

  let div = document.querySelector("div");
  div.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
};
