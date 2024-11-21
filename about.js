document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500);

});
document.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const topBlur = document.querySelector('.blur-top');
  const bottomBlur = document.querySelector('.blur-bottom');

  if (scrollTop > 0) {
    topBlur.style.display = 'block';
  } else {
    topBlur.style.display = 'none';
  }

  if (scrollTop + clientHeight < scrollHeight) {
    bottomBlur.style.display = 'block';
  } else {
    bottomBlur.style.display = 'none';
  }
});

// Initial check to set the blur visibility on page load
document.dispatchEvent(new Event('scroll'));