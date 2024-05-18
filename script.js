document.getElementById('guestBookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Display the notification
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.opacity = 1;
    }, 10);

    // Hide the notification after 3 seconds
    setTimeout(function() {
        notification.style.opacity = 0;
        setTimeout(function() {
            notification.style.display = 'none';
        }, 500);
    }, 3000);

    // Clear form fields
    document.getElementById('guestBookForm').reset();
});

