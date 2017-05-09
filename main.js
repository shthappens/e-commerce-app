let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', "It\'s a tiny Launch sticker. How cute!"],
  ['LA-T-SHIRT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
];

// your code, here
class Product {
  constructor(productId, productQuantity, productName, productImage, productDescription) {
    this.id = productId;
    this.quantity = productQuantity;
    this.name = productName;
    this.imageUrl = productImage;
    this.description = productDescription;
  }

  sell() {
    this.quantity --;
  }

  toHTML() {
    let productPage = document.createElement('div');
    productPage.className = 'product';
    productPage.innerHTML =  `<h1>Product Name: ${this.name}</h1>`;
    productPage.innerHTML += `<h5>${this.quantity} In Stock</h5>`;
    productPage.innerHTML += `<img src="${this.imageUrl}" />`;
    productPage.innerHTML += `<h3>Description:</h3>`;
    productPage.innerHTML += `<p>${this.description}</p>`;

    return productPage.innerHTML;
  }
}

inventory.map((inventory) => {
  let product = new Product(...inventory);
  productElement = document.getElementById('all-products');
  productElement.innerHTML += product.toHTML();
});
