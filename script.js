let cart =[];
let total = 0;

function addToCart(item,price){
    cart.push({item,price});
    total += Number(price);
    updateCart();
}

function removeFromCart(index){
    const removed = cart.splice(index,1)[0];
    total -= Number(removed.price);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML ="";

    cart.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${product.item} - $${product.price.toFixed(2)}
        <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}