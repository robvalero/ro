   // Select the toggle button and the nav links container
   const toggleBtn = document.querySelector('.toggle-btn');
   const navLinks = document.querySelector('.nav-links');

   // Add an event listener to the toggle button
   toggleBtn.addEventListener('click', () => {
       // Toggle the 'active' class on the nav links container
       navLinks.classList.toggle('active');
   });