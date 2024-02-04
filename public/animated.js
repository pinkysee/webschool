// banner
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.banner');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 1.25) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
// item 1
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.item1');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 1) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
// item2
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.item2');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 1) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//item3
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.item3');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 1) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//item4
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.item4');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 1) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//faq1
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.faqblock1');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 0.75) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//faq2
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.faqblock2');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight * 0.75) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//faq3
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.faqblock3');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });
//faq4
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.querySelector('.faqblock4');
  
    function checkVisibility() {
      var rect = animatedDiv.getBoundingClientRect();
      var windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight) {
        animatedDiv.classList.add('show');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });