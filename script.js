//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//

// baad ma
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

// responsive 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Animated Counter
function animateCounter(element, targetValue, duration) {
  let currentValue = 0;
  const step = targetValue / (duration / 16); // Assuming 60fps

  function updateCounter() {
      currentValue += step;
      element.textContent = Math.floor(currentValue);

      if (currentValue < targetValue) {
          requestAnimationFrame(updateCounter);
      }
  }

  updateCounter();
}

menu.onclick = ()  =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Smooth Scrolling
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Trigger Counter Animation
let counterButton = document.querySelector('.counter-button');
let counterElement = document.querySelector('.counter');

counterButton.addEventListener('click', () => {
  animateCounter(counterElement, 100, 2000); // Count from 0 to 100 in 2000 milliseconds
});


var homeSwiper = new Swiper(".Home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

 