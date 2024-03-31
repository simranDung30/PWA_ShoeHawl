document.addEventListener("DOMContentLoaded", function () {
    const featuredProductContainer = document.querySelector(".featured-products .product-grid");
    const shoeProductContainer = document.querySelector(".shoes-collection .product-grid");

    // Check if products are already appended
    if (featuredProductContainer.children.length === 0) {
        addProducts(featuredProducts, featuredProductContainer);
    }

    if (shoeProductContainer.children.length === 0) {
        addProducts(shoeProducts, shoeProductContainer);
    }

    // Register the Service Worker
    window.addEventListener('load', () => {
        registerSW();
    });

    async function registerSW() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('service.js');
            } catch (e) {
                console.log('SW registration failed');
            }
        }
    }

    function addProducts(products, container) {
        products.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        // Add click event listener to each button
        const addToCartButton = productCard.querySelector(".add-to-cart-btn");
        addToCartButton.addEventListener("click", async () => {
            var swRegistration = await navigator.serviceWorker.register("service.js");
            swRegistration.sync.register("helloSync").then(function () {
                console.log("helloSync success [script.js]");
            });
        });

        return productCard;
    }
});
