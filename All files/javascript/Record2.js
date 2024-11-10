function navigateTo(page) {
    console.log("Navigating to: " + page);
    window.location.href = page;
  }

  function toggleEdit() {
    // Get all input elements inside the form
    var inputs = document.querySelectorAll('#myForm input');
    
    // Check if the first input is disabled to decide the action
    var isDisabled = inputs[0].disabled;

    // Toggle the disabled attribute for all inputs
    inputs.forEach(function(input) {
      input.disabled = !isDisabled;
    });

    // Change the button text based on the state
    var button = document.querySelector('.save-button');
    if (isDisabled) {
      button.textContent = "บันทึก (Save)";  // Change button text to "Save" when inputs are enabled
    } else {
      button.textContent = "แก้ไข (Edit)";  // Change button text to "Edit" when inputs are disabled
    }
  }