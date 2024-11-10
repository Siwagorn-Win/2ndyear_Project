// Function to navigate to different pages
function navigateTo(url) {
  window.location.href = url;
}

// Function to show records based on the selected tab
function showRecords(type) {
  const bookingSection = document.getElementById('booking');
  const approvalSection = document.getElementById('approval');
  const bookingTab = document.querySelector('.tab[onclick="showRecords(\'booking\')"]');
  const approvalTab = document.querySelector('.tab[onclick="showRecords(\'approval\')"]');
  
  if (type === 'booking') {
      bookingSection.style.display = 'flex';
      approvalSection.style.display = 'none';
      bookingTab.classList.add('active');
      approvalTab.classList.remove('active');
  } else if (type === 'approval') {
      bookingSection.style.display = 'none';
      approvalSection.style.display = 'flex';
      approvalTab.classList.add('active');
      bookingTab.classList.remove('active');
  }
}

// Initialize the default view
document.addEventListener('DOMContentLoaded', () => {
  showRecords('booking');
});
