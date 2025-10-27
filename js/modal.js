// Модальное окно "О магазине"
document.addEventListener("DOMContentLoaded", () => {
    const aboutModal = document.getElementById("about-modal");
    const aboutBtn = document.getElementById("modal-btn");
    const aboutSpan = aboutModal.querySelector(".close");

    aboutBtn.onclick = () => aboutModal.style.display = "block";
    aboutSpan.onclick = () => aboutModal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === aboutModal) aboutModal.style.display = "none";
    };

    // Закрытие модального окна оформления заказа
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutSpan = checkoutModal.querySelector(".close");

    checkoutSpan.onclick = () => checkoutModal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === checkoutModal) checkoutModal.style.display = "none";
    };
});