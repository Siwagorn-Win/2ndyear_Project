function navigateTo(page) {
    window.location.href = page;
}

function togglePopup() {
    const popup = document.getElementById('notificationPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function clearNotifications() {
    // Check if notificationCount exists before accessing it
    if (document.getElementById('notificationCount')) {
        document.getElementById('notificationCount').textContent = '0';
    }

    const notificationContent = document.querySelector('.notification-content');
    if (notificationContent) {
        notificationContent.innerHTML = ''; // Clear all <h1> elements within this container
    }
}

document.getElementById('notification-icon').addEventListener('click', () => {
    document.querySelector('.notification-popup').style.display = 'block';
});

// Remove duplicate clearNotifications() function