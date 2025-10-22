const CatalogModule = (function() {
    const products = [
        { id: 1, name: "Азотное удобрение (N)", price: 1200, unit: "кг", description: "Для роста зеленой массы" },
        { id: 2, name: "Фосфорное удобрение (P)", price: 1500, unit: "кг", description: "Для развития корневой системы" },
        { id: 3, name: "Калийное удобрение (K)", price: 1300, unit: "кг", description: "Для устойчивости к болезням" },
        { id: 4, name: "Смешанное NPK", price: 2000, unit: "кг", description: "Комплексное удобрение 15-15-15" },
        { id: 5, name: "Органическое (навоз)", price: 800, unit: "кг", description: "Естественное питание для почвы" }
    ];

    const renderCatalog = () => {
        const list = document.getElementById('product-list');
        list.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <div class="price">${product.price} руб./${product.unit}</div>
                <button class="add-to-cart-btn" data-id="${product.id}">Добавить в корзину</button>
            `;
            list.appendChild(card);
        });
    };

    const getProductById = (id) => {
        return products.find(p => p.id == id);
    };

    return {
        renderCatalog,
        getProductById
    };
})();