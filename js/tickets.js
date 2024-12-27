// Update total price based on selected ticket type and quantity
document.addEventListener('DOMContentLoaded', () => {
    const ticketType = document.getElementById('ticket-type');
    const ticketQuantity = document.getElementById('ticket-quantity');
    const totalPrice = document.getElementById('total-price');

    const ticketPrices = {
        adult: 22,
        student: 17,
        senior: 10,
        child: 20,
    };

    const updateTotalPrice = () => {
        const selectedType = ticketType.value;
        const quantity = parseInt(ticketQuantity.value, 10);
        const pricePerTicket = ticketPrices[selectedType];
        totalPrice.textContent = (pricePerTicket * quantity).toFixed(2);
    };

    ticketType.addEventListener('change', updateTotalPrice);
    ticketQuantity.addEventListener('input', updateTotalPrice);
});
