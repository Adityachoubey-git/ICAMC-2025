
function changeTab(tabNumber) {
    const buttons = document.getElementsByClassName('tab');
    const contents = document.getElementsByClassName('content');
  
    for (let i = 0; i < buttons.length; i++) {
      if (i === tabNumber - 1) {
        buttons[i].classList.add('active');
        buttons[i].style.backgroundColor = '#b44860';
        buttons[i].style.color = 'white';
        contents[i].style.display = 'block';
      } else {
        buttons[i].classList.remove('active');
        buttons[i].style.backgroundColor = 'white';
        buttons[i].style.color = 'black';
        contents[i].style.display = 'none';
      }
    }
  }
  // Function to toggle the dropdown menu
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach((item) => {
      if (item.id !== id) {
        item.classList.add('hidden');
      }
    });
    dropdown.classList.toggle('hidden');
  }
  
  // Open the "Organising Chair" section by default
  const organisingChairDropdown = document.getElementById('patrons_dropdown');
  organisingChairDropdown.classList.remove('hidden');
  
  
  const menuToggle = document.getElementById('menu-toggle');
      const navLinks = document.getElementById('nav-links');
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('top-20');
        navLinks.classList.toggle('bg-theme');
        navLinks.classList.toggle('top-[-619px]');
      });
  var countDownDate = new Date("May 1, 2025 10:00:00").getTime();
   
  var x = setInterval(function() {
     
    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("demo").innerHTML = days + " D : " + hours + " H : "
    + minutes + " M : " + seconds + ' S';
        
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  
  
   
