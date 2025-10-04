document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close-btn");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Add item to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price);

            cart.push({ name, price });
            updateCart();
        });
    });

    // Update cart
    function updateCart() {
        cartCount.textContent = cart.length;

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.style.marginLeft = "10px";
            removeBtn.style.background = "transparent";
            removeBtn.style.border = "none";
            removeBtn.style.cursor = "pointer";
            removeBtn.style.color = "#ff6f61";
            removeBtn.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });

            li.appendChild(removeBtn);
            cartItems.appendChild(li);

            total += item.price;
        });

        cartTotal.textContent = total;
    }

    // Open/Close Modal
    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == cartModal) {
            cartModal.style.display = "none";
        }
    });
});
