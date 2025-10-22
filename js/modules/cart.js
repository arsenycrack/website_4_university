const CartModule = (function() {
    let items = [];

    const addItem = (productId) => {
        const product = CatalogModule.getProductById(productId);
        if (!product) return;

        const existingItem = items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
        }
        updateCartDisplay();
    };

    const removeItem = (productId) => {
        items = items.filter(item => item.id !== productId);
        updateCartDisplay();
    };

    const clearCart = () => {
        items = [];
        updateCartDisplay();
    };

    const getTotal = () => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const getItemCount = () => {
        return items.reduce((count, item) => count + item.quantity, 0);
    };

    const updateCartDisplay = () => {
        const list = document.getElementById('cart-items');
        list.innerHTML = '';
        if (items.length === 0) {
            list.textContent = "Корзина пуста";
        } else {
            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <div class="cart-item-info">
                        <span>${item.name} x ${item.quantity}</span> = <strong>${item.price * item.quantity} руб.</strong>
                    </div>
                    <button class="remove-from-cart-btn" data-id="${item.id}">Удалить</button>
                `;
                list.appendChild(div);
            });
        }

        const totalDiv = document.createElement('div');
        totalDiv.id = 'cart-total';
        totalDiv.textContent = `Общая сумма: ${getTotal()} руб.`;
        list.appendChild(totalDiv);
        document.getElementById('cart-count').textContent = getItemCount();
        document.getElementById('cart-total-display').textContent = getTotal();
    };

    const getItems = () => items;

    return {
        addItem,
        removeItem,
        clearCart,
        updateCartDisplay,
        getItems,
        getTotal
    };
})();