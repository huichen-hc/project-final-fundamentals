window.addEventListener('load', function() {
  
  const loadingScreen = document.getElementById('loading-screen');

  document.body.classList.add('loaded');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1000);
  // Target all divs with the class of blur
  const blurDivs = document.querySelectorAll('div.blur');

  // Start the unblur effect after the blur effect
  setTimeout(() => {
    blurDivs.forEach(div => {
      div.classList.remove('blur');
      div.classList.add('unblur');
    });
  }, 500); 
});