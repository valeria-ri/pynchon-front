// Скролл вверх
document.getElementById('scrollToTopLink').addEventListener('click', function(event) {
  event.preventDefault();
  scrollToTop();
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
