let input = document.querySelector("input");
input.addEventListener("input", (event) => {
  let h1 = document.querySelector("h1");
  h1.innerText = event.target.value;
});
