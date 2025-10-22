document.addEventListener("DOMContentLoaded", () => {
    CatalogModule.renderCatalog();
    CartModule.updateCartDisplay();

    // добавить в корзину
    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            CartModule.addItem(productId);
        }
    });

    // удалить из корзины
    document.getElementById('cart-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            CartModule.removeItem(productId);
        }
    });

    document.getElementById("clear-cart").addEventListener("click", () => {
        CartModule.clearCart();
    });

    document.getElementById("checkout-btn").addEventListener("click", () => {
        CheckoutModule.displayCheckoutModal();
    });

    // оформление заказа
    document.getElementById("checkout-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('customer-name').value,
            phone: document.getElementById('customer-phone').value,
            address: document.getElementById('delivery-address').value,
            comment: document.getElementById('delivery-comment').value
        };

        const result = CheckoutModule.processOrder(formData);
        CheckoutModule.displayResult(result);

        document.getElementById('checkout-modal').style.display = 'none';
    });
});