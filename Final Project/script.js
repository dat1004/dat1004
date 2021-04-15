// Toggle menu/showcase
const menuToggle = document.querySelector(".toggle");
const showCase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showCase.classList.toggle("active");
});

// Toggle cart
const cartToggle = document.querySelector(".cart");
const cartOverlayToggle = document.querySelector(".cart-overlay");
const cartMenu = document.querySelector(".cart-menu");
const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

cartMenu.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//close cart
const cartClose = document.querySelector(".close-cart");
cartClose.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//variables
const cartBtn = document.querySelector(".cart-menu");
const closeCartBtn = document.querySelector;
(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productDOM = document.querySelector(".product-detail");

//Cart
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      console.dir(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//UI product
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <div class="porfolio">
          <div class="item">
            <img
              src=${product.image}
              alt="porfolio-item1"
            />
            <div class="product">
              <div class="product-brand">${product.id}</div>
              <a class="product-name" href=#
                >${product.title}</a
              >
              <div class="product-price">${product.price}</div>
            </div>
      `;
    });
    productsDOM.innerHTML = result;
  }
}

//local Storage
class Storage {}

//event listener
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //Ger all products
  products.getProducts().then((products) => ui.displayProducts(products));
});
