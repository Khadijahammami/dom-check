const addButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const deleteButtons = document.querySelectorAll(".delete");
const quantityElements = document.querySelectorAll(".btn-cont p");
const unitPriceElements = document.querySelectorAll(".unitPrice");
const totalPriceElements = document.querySelectorAll(".price");
const totalElement = document.getElementById("total");


// let totalPrice = 0;

// Fonction pour calculer le prix total
function calculateTotalPrice() {
  totalPrice = 0;
  totalPriceElements.forEach((element, index) => {
    const quantity = parseInt(quantityElements[index].textContent);
    const unitPrice = parseInt(unitPriceElements[index].textContent);
    const price = quantity * unitPrice;
    element.textContent = price;
    totalPrice += price;
  });
  totalElement.textContent = totalPrice;
}

// Fonction pour gérer l'ajout au panier
function handleAddToCart(event) {
  const productId = event.target.dataset.id;
  console.log(productId)
  const index = Array.from(addButtons).indexOf(event.target);
  quantityElements[index].textContent = parseInt(quantityElements[index].textContent) + 1;
  calculateTotalPrice();
}

// Fonction pour gérer la décrémentation de la quantité
function handleDecrementQuantity(event) {
  const productId = event.target.dataset.id;
  const index = Array.from(minusButtons).indexOf(event.target);
  let quantity = parseInt(quantityElements[index].textContent);
  if (quantity > 0) {
    quantity -= 1;
    quantityElements[index].textContent = quantity;
    calculateTotalPrice();
  }
}

// Fonction pour gérer la suppression d'une ligne
function handleDeleteRow(e) {
  const cible= e.target;
  
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
 tr.remove();
 var priceT=tr.querySelector(".price");
 console.log(priceT)
 priceT.innerHTML=0
 calculateTotalPrice();
}

// Ajouter les écouteurs d'événements aux boutons "add"
addButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
});

// Ajouter les écouteurs d'événements aux boutons "-"
minusButtons.forEach((button) => {
  button.addEventListener("click", handleDecrementQuantity);
});

// Ajouter les écouteurs d'événements aux boutons de suppression
deleteButtons.forEach((button) => {
  button.addEventListener("click", handleDeleteRow);
});
function changecolor(e)

{
var cible=e.target
if (cible.style.color!='red')
{
    cible.style.color='red'
}
else
{
    cible.style.color="black"
}
}
var like_btns=document.querySelectorAll(".like");
for(var i=0;i<like_btns.length;i++)
{
    like_btns[i].addEventListener('click',changecolor)
}

 // Ajouter les écouteurs d'événements aux boutons "like"
//  const likeButtons = document.querySelectorAll(".like");
//  likeButtons.forEach((button) => {
//    button.addEventListener("click", addToFavorites);
//  });