/* GLOBAL VARIABLES */
var listOfProducts;

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products; // listOfProducts contains all products fron the jsonfile
    loopList();
});


//This function create a div-element with the products
function loopList() {
var productList = document.createElement("div");
productList.className = "productListClass";
//loop
for(var index = 0; index < listOfProducts.length;index++) {
    var productCard = createProductCard(listOfProducts[index]);
    productList.appendChild(productCard)
    
}
document.body.appendChild(productList);
}
//Create function to append childelement, and get the product visible on the site  
function createProductCard(listOfProducts) {
    var productCard = document.createElement("div")
    productCard.className = "productCardClass";
    productCard.id = "productCardId";

    var getProductTitle = document.createElement("h3");
    getProductTitle.innerText = listOfProducts.title;
    

    var getProductDescription = document.createElement("h4");
    getProductDescription.innerText = listOfProducts.description;
    

    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + listOfProducts.image;
    

    var getProductPrice = document.createElement("h5");
    getProductPrice.innerText = listOfProducts.price + " kr";
    
//Create buttonelement with text
    var getProductButton = document.createElement("button");
    getProductButton.innerText = " Lägg till i kundvagnen";
    console.log(listOfProducts.price);
    getProductButton.onclick = function(listOfProducts,index, productCard){add(productCard, listOfProducts[index])}
    

    productCard.appendChild(getProductTitle);
    productCard.appendChild(getProductDescription);
    productCard.appendChild(getProductImage);
    productCard.appendChild(getProductPrice);
    productCard.appendChild(getProductButton);
    
  
    return productCard;
}

var count = 0
var step = 1;
var span = document.querySelector("span");


//This function makes the quantity(the number beside the shoppingcart in header) change when click add product
function add(index, getProductTitle) {
    count = count + step
    span.innerText = count;
    alert("Din vara har lagts i varukorgen!");
    console.log();
    //addToCart();
    
    
}
/*
function addToCart(index) {
    varukorg = [];
    varukorg.push(listOfProducts[2]);
    
    console.log(varukorg);
}*/



