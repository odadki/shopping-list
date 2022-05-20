let ul = document.querySelector("ul");
let inputItem = document.getElementById("item");
let button = document.querySelector("button");
let form = document.querySelector("form");

// function deleteButton(event) {
//   ul.removeChild(listItem);
// }

function shoppingList(event) {
  event.preventDefault();
  if (inputItem.value.length > 0) {
    let inputValue = inputItem.value;
    inputItem.value = "";

    let listItem = document.createElement("li");
    let listText = document.createElement("span");
    let listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(listButton);
    listButton.textContent = "Delete";
    ul.appendChild(listItem);

    listButton.addEventListener("click", () => {
      ul.removeChild(listItem);
    });
  }
}

button.addEventListener("click", shoppingList);
