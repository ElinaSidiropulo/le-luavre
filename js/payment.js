// payment.js
const form = document.getElementById('payment-form');
const visitDate = document.getElementById('visit-date');
const dateError = document.getElementById('date-error');
const expiryDate = document.getElementById('expiry-date');

// Установка минимальной даты (сегодня)
const today = new Date().toISOString().split('T')[0];
visitDate.min = today;

// Обработка отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение

    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
    const cvv = document.getElementById('cvv').value;
    const selectedDate = new Date(visitDate.value);
    const now = new Date();
    const cardHolder = document.getElementById('card-name').value;
    const expiry = new Date(expiryDate.value);
    const ticketType = localStorage.getItem('ticketType');
    const totalPrice = localStorage.getItem('totalPrice'); // Получаем итоговую цену из localStorage

    // Проверка правильности номера карты
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    // Проверка CVV
    if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    // Проверка срока действия карты
    if (expiry < now) {
        alert('Your card has expired. Please use a valid card.');
        return;
    }

    // Проверка даты посещения
    if (selectedDate < now) {
        dateError.style.display = 'block';
        return;
    } else {
        dateError.style.display = 'none';
    }

    // Сохраняем данные в localStorage для использования на странице receipt.html
    localStorage.setItem('cardName', cardHolder);
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('ticketType', ticketType);
    localStorage.setItem('price', totalPrice); // Сохраняем итоговую цену
    localStorage.setItem('visitDate', visitDate.value);

    // Переход на страницу receipt.html
    window.location.href = 'receipt.html';
});
