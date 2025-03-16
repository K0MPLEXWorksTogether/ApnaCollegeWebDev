let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let input = document.querySelector("input");
  let ul = document.querySelector("ul");

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  let newTask = document.createElement("li");
  newTask.innerText = input.value;
  newTask.appendChild(deleteBtn);
  ul.appendChild(newTask);
});

let ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  let parent = event.target.parentElement;
  parent.remove();
});

let deleteBtns = document.querySelectorAll(".delete");
for (btn of deleteBtns) {
  btn.addEventListener("click", function () {
    let parent = this.parentElement;
    parent.remove();
  });
}
