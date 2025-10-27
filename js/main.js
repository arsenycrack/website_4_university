// Основной скрипт
document.addEventListener("DOMContentLoaded", () => {
    CatalogModule.renderCatalog();
    CatalogModule.renderSlider();
    CartModule.updateCartDisplay();

    // Слайдер
    let currentSlide = 0;
    const track = document.getElementById('slider-track');
    const slides = document.querySelectorAll('.slider-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');
    const totalSlides = slides.length;

    // Создание индикаторов
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.slider-dot');

    const updateSlider = () => {
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Обновление активного индикатора
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    // Автоматическая прокрутка (каждые 5 секунд)
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);

    // При наведении на слайдер останавливаем прокрутку
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    // При уходе с курсора — включаем обратно
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    // Переключение по клику на индикатор
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.dataset.index);
            updateSlider();
        });
    });

    // Делегирование событий для кнопок "Добавить в корзину" (включая слайдер)
    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            CartModule.addItem(productId);
        }
    });

    // Делегирование событий для кнопок "Удалить из корзины"
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

    // Обработка формы оформления заказа
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

        // Закрываем модальное окно
        document.getElementById('checkout-modal').style.display = 'none';
    });
});