// JavaScript code to show the message box after login
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in (use your own condition here)
    const isLoggedIn = true;
  
    if (isLoggedIn) {
      const messageBox = document.getElementById('messageBox');
      messageBox.classList.remove('hidden');
    }
  });