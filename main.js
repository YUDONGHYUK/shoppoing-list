"use strict";

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

addBtn.addEventListener("click", (e) => {
  const inputValue = input.value;
  const item = createItemRow(inputValue);
  items.appendChild(item);
  input.value = "";
  input.focus();
});

function createItemRow(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item__name");
  itemName.innerText = text;

  const itemDelete = document.createElement("button");
  itemDelete.setAttribute("class", "item__delete");
  itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  itemDelete.addEventListener("click", (e) => {
    console.log("delete");
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(itemName);
  item.appendChild(itemDelete);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}
