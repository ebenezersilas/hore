// Toggle function for menu items
function toggleMenu() {
    var menu = document.querySelector('.navbar-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
  }
  
  // Event listener for toggle icon
  document.querySelector('.toggle-icon').addEventListener('click', toggleMenu);
  