// Модуль оформления заказа
const CheckoutModule = (function() {
    const displayCheckoutModal = () => {
        const items = CartModule.getItems();
        if (items.length === 0) {
            alert("Корзина пуста. Невозможно оформить заказ.");
            return;
        }

        const summaryDiv = document.getElementById('checkout-summary');
        let summaryText = "Ваш заказ:\n";
        items.forEach(item => {
            summaryText += `- ${item.name} x ${item.quantity} = ${item.price * item.quantity} руб.\n`;
        });
        summaryText += `\nИтого: ${CartModule.getTotal()} руб.`;
        summaryDiv.textContent = summaryText;

        document.getElementById('checkout-modal').style.display = 'block';
    };

    const processOrder = (formData) => {
        const items = CartModule.getItems();
        if (items.length === 0) {
            return "Корзина пуста.";
        }

        let result = `✅ Заказ успешно оформлен!\n\n`;
        result += `Имя: ${formData.name}\n`;
        result += `Телефон: ${formData.phone}\n`;
        result += `Адрес: ${formData.address}\n`;
        if (formData.comment) result += `Комментарий: ${formData.comment}\n\n`;
        result += "Состав заказа:\n";
        items.forEach(item => {
            result += `- ${item.name} x ${item.quantity} = ${item.price * item.quantity} руб.\n`;
        });
        result += `\nИтого: ${CartModule.getTotal()} руб.\n`;
        result += "\nСпасибо за покупку!";

        // Сброс корзины после оформления
        CartModule.clearCart();

        return result;
    };

    const displayResult = (result) => {
        const output = document.getElementById('checkout-result');
        output.textContent = result;
    };

    return {
        displayCheckoutModal,
        processOrder,
        displayResult
    };
})();