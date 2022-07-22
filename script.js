let ul = document.querySelector("ul");
let inputItem = document.getElementById("item");
let button = document.querySelector("button");
let form = document.querySelector("form");

function shoppingList(event) {
  event.preventDefault();
  if (inputItem.value.length > 0) {
    let inputValue = inputItem.value;
    inputItem.value = "";

    let listItem = document.createElement("li");
    let listText = document.createElement("span");
    let listButton = document.createElement("button");
    let checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox-decoration");
    listItem.classList.add("list-decoration");
    listItem.appendChild(checkbox);
    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(listButton);
    listButton.textContent = "DEL";
    ul.appendChild(listItem);

    listButton.addEventListener("click", () => {
      ul.removeChild(listItem);
    });

    checkbox.addEventListener("click", () => {
      listItem.classList.toggle("checkbox-click");
    });
  }
}

button.addEventListener("click", shoppingList);
