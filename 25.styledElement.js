function addStyledElement() {
  const newElement = document.createElement("div");

  newElement.textContent = "Hello World!";

  newElement.style.color = "blue";

  document.body.appendChild(newElement);
}

addStyledElement();
