let cart = [];

function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart');
  const totalDisplay = document.getElementById('total');

  // Clear current list
  cartList.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}
