function navigateTo(page) {
  console.log("Navigating to: " + page);
  window.location.href = page;
}
  
  document.addEventListener("DOMContentLoaded", function() {
    const addClientButton = document.querySelector('.add-client');
    const clientRow = document.querySelector('.client-row');
  
    addClientButton.addEventListener('click', function() {
      const clientID = document.getElementById('clientID').value;
      const clientName = document.getElementById('clientName').value;
  
      // Validate input
      if (clientID === "" || clientName === "") {
        alert("Please enter both Client ID and Name.");
        return;
      }
  
      // Create new client row
      const newClientRow = document.createElement('div');
      newClientRow.classList.add('client-row');
  
      newClientRow.innerHTML = `
        <label>ID:</label>
        <input type="text" value="${clientID}" readonly>
        <label>ชื่อ:</label>
        <input type="text" value="${clientName}" readonly>
        <button class="delete-client">Delete</button>
      `;
  
      // Append the new client row below the original row
      clientRow.parentNode.insertBefore(newClientRow, clientRow.nextSibling);
  
      // Clear the input fields
      document.getElementById('clientID').value = '';
      document.getElementById('clientName').value = '';
  
      // Add delete functionality to the new button
      const deleteButton = newClientRow.querySelector('.delete-client');
      deleteButton.addEventListener('click', function() {
        newClientRow.remove();
      });
    });
  });