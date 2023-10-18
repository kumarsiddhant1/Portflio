function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}

/*document.addEventListener('DOMContentLoaded', function () {
    // Function to handle button click and update URL
    function handleContactButtonClick() {
      // Update the URL to include the fragment identifier #contact
      window.location.href = window.location.origin + window.location.pathname + '#contact';
    }

    // Attach click event listener to the Contact Info button
    const contactButton = document.querySelector('.btn-color-1');
    if (contactButton) {
      contactButton.addEventListener('click', handleContactButtonClick);
    }
  });*/