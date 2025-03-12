let inputEle = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me!";

let body = document.querySelector("body");
body.append(inputEle);
body.append(button);

inputEle.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
h1.classList.add("purple");
body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);
