function navigateTo(page) {
    console.log("Navigating to: " + page);
    window.location.href = page;
  }
  
const calendarIcons = document.querySelectorAll('.input-wrapper img.calendar-icon');
const inputFields = document.querySelectorAll('.input-wrapper input[type="text"]');


inputFields.forEach((inputField, index) => {
    flatpickr("#start-date", {
        dateFormat: "d/m/Y",
        altInput: true,
        altFormat: "d/m/Y",
        wrap: true,
      });
      
      flatpickr("#end-date", {
        dateFormat: "d/m/Y",
        altInput: true,
        altFormat: "d/m/Y",
        wrap: true,
      });

        calendarIcons[index].addEventListener('click', () => {
    const flatpickrInstance = flatpickr.getInstance(inputFields[index]);
    flatpickrInstance.open();
  });
});