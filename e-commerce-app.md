### Introduction

Use your knowledge of HTML, CSS, and JavaScript to create an E-Commerce website
to display Launch Academy swag.


### Getting Started

```no-highlight
$ et get e-commerce-app
$ cd e-commerce-app
```

Open `index.html` in your browser.


### Build a Constructor for Products

At the bottom of the provided `main.js` file, create a `Product` class that accepts the
following arguments to its constructor method.

* A unique identifier (**id**) for the product.
* The **quantity** of the product on hand.
* The **name** of the product.
* A relative URL to an **image** for the product.
* A short description of the product.

Don't forget to save these values as instance variables inside the constructor.


### Create a `#sell` Method

We need a way to decrease the quantity of our products. Create an instance method
called `sell` which decreases the quantity of a product by one.


### Create a `#toHTML` Method

What good is a product if the user can't see it? We need a way to turn a product
object into something a web browser can understand. Write a `toHTML` instance
method that generates the HTML representation of the object.

```no-highlight
<div class="product">
  <h1>Product Name: Large Sticker</h1>
  <h5>300 In Stock</h5>
  <img src="images/la-large-sticker.png" alt="Large Launch Academy Sticker" />

  <h3>Description</h3>
  <p>
    Show your Launch pride by plastering your laptop with these beautiful
    die-cut stickers.
  </p>
</div>
```


### Put it All Together

At the top of `main.js` our product inventory is stored in arrays.
We need you to use your JavaScript skills to get this information in front of
people's eyeballs.

First, use the `map` method and the **rest parameter** (`...`) to turn our array
of product data into an array of product instances. Remember, map takes each element out of the array it is called on, performs a given function on it and puts the result in a new array. So, in this case, we can use it on our `inventory` array to get an array of product instances. We just need to define the function that will transform one of our inventory array elements, like `['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.']` into a product instance. That's where the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) can help. Here's an example of how you could turn an element of our `inventory` array into a product instance using the rest parameter.

```no-highlight
let productData = ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.']

let product = new Product(...productData)
```

Once we have our array of product objects, we can insert them into the page.

```no-highlight
element = document.getElementById('all-products')

products.forEach((product) => {
  element.innerHTML += product.toHTML()
})
```
