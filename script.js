
const exchangeRate = 80; // 1 USD to 80 INR
 
const itemList = document.getElementById("item-list");

function convertToRupees(priceUSD) {
  return priceUSD * exchangeRate;
}

function updateConvertedPrice(itemElement, priceUSD){
  const convertedPrice = convertToRupees(priceUSD);
  itemElement.querySelector(".indian-price").textContent = `${convertedPrice.toFixed(2)} INR`;
}

function createItemElement() {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");

  const itemNameInput = document.createElement("input");
  
  itemNameInput.type = "text";
  itemNameInput.placeholder = "Item Name";
  itemElement.appendChild(itemNameInput);


  const priceUSDInput = document.createElement("input");
  priceUSDInput.type = "number";
  priceUSDInput.placeholder = "Price in USD";
  itemElement.appendChild(priceUSDInput);


  const indianPriceOutput = document.createElement("span");
  indianPriceOutput.classList.add("indian-price");
  itemElement.appendChild(document.createTextNode("converted Price in \u20B9: "));
  itemElement.appendChild(indianPriceOutput);


  itemNameInput.addEventListener("input", function () {
    itemElement.querySelector(".item-name").textContent = itemNameInput.value;
  });

  priceUSDInput.addEventListener("input", function () {
    updateConvertedPrice(itemElement, parseFloat(priceUSDInput.value));
  });


  return itemElement;
}

function displayItems() {
  for (let i = 0; i < 5; i++) {
    const itemElement = createItemElement();
    itemList.appendChild(itemElement);
  }
}

displayItems();

