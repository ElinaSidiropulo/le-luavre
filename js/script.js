document.addEventListener('DOMContentLoaded', function() {
    const scheduleLink = document.querySelector('.menu a[href="#schedule"]');
    if (scheduleLink) {
        scheduleLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'pages/schedule.html'; // Redirect to the schedule page
        });
    }
});
