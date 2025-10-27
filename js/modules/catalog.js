// Модуль каталога товаров
const CatalogModule = (function() {
    // Добавим поле image для каждого товара (оставим placeholder)
    // и поле altText для альтернативного текста
    const products = [
        { id: 1, name: "Семена томатов 'Бычье сердце'", price: 150, unit: "упаковка", description: "Крупные, сочные плоды", image: "images/seeds_tomato.jpg", altText: "Семена томатов" },
        { id: 2, name: "Семена огурцов 'Муравей'", price: 120, unit: "упаковка", description: "Раннеспелый, урожайный сорт", image: "images/seeds_cucumber.jpg", altText: "Семена огурцов" },
        { id: 3, name: "Семена перца 'Кармен'", price: 180, unit: "упаковка", description: "Сладкий, мясистый", image: "images/seeds_pepper.jpg", altText: "Семена перца" },
        { id: 4, name: "Семена моркови 'Шантане'", price: 90, unit: "упаковка", description: "Классическая морковь", image: "images/seeds_carrot.jpg", altText: "Семена моркови" },
        { id: 5, name: "Семена капусты 'Слава'", price: 100, unit: "упаковка", description: "Среднеспелая, плотная", image: "images/seeds_cabbage.jpg", altText: "Семена капусты" },
        { id: 6, name: "Семена подсолнечника 'Енисей'", price: 200, unit: "упаковка", description: "Для масличного производства", image: "images/seeds_sunflower.jpg", altText: "Семена подсолнечника" },
        { id: 7, name: "Семена укропа 'Гренадер'", price: 80, unit: "упаковка", description: "Ранний, ароматный", image: "images/seeds_dill.png", altText: "Семена укропа" },
        { id: 8, name: "Семена петрушки 'Бордовикская'", price: 85, unit: "упаковка", description: "Корневая, крупная", image: "images/seeds_parsley.jpg", altText: "Семена петрушки" }
    ];

    // Товары для слайдера (например, 3 самых популярных)
    const sliderProducts = products.slice(0, 3);

    const renderCatalog = () => {
        const list = document.getElementById('product-list');
        list.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.altText}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'150\' viewBox=\'0 0 200 150\'><rect width=\'100%\' height=\'100%\' fill=\'%23ddd\'/><text x=\'50%\' y=\'50%\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'14\' fill=\'%23666\'>${encodeURIComponent(product.altText)}</text></svg>'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <div class="price">${product.price} руб./${product.unit}</div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Добавить в корзину</button>
                </div>
            `;
            list.appendChild(card);
        });
    };

    const renderSlider = () => {
        const track = document.getElementById('slider-track');
        track.innerHTML = '';
        sliderProducts.forEach(product => {
            const slide = document.createElement('div');
            slide.className = 'slider-slide';
            slide.innerHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.altText}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'150\' viewBox=\'0 0 200 150\'><rect width=\'100%\' height=\'100%\' fill=\'%23ddd\'/><text x=\'50%\' y=\'50%\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'14\' fill=\'%23666\'>${encodeURIComponent(product.altText)}</text></svg>'">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="description">${product.description}</p>
                        <div class="price">${product.price} руб./${product.unit}</div>
                        <button class="add-to-cart-btn" data-id="${product.id}">Добавить в корзину</button>
                    </div>
                </div>
            `;
            track.appendChild(slide);
        });
    };

    const getSliderProducts = () => sliderProducts;

    const getProductById = (id) => {
        return products.find(p => p.id == id);
    };

    return {
        renderCatalog,
        renderSlider,
        getSliderProducts,
        getProductById
    };
})();