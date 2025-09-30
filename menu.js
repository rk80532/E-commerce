// Hamburger menu toggle & accessibility
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
    // Accessibility: update aria-expanded
    hamburger.setAttribute('aria-expanded', menu.classList.contains('active'));
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Keyboard accessibility for hamburger
  hamburger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menu.classList.toggle('active');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', menu.classList.contains('active'));
    }
  });

  // Optional: Close menu when a menu link is clicked (for single-page sites)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Extra Feature: Scroll-to-top button ---
  // Create button
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '30px';
  scrollBtn.style.right = '30px';
  scrollBtn.style.display = 'none';
  scrollBtn.style.background = '#6638c8';
  scrollBtn.style.color = '#fff';
  scrollBtn.style.border = 'none';
  scrollBtn.style.borderRadius = '50%';
  scrollBtn.style.width = '44px';
  scrollBtn.style.height = '44px';
  scrollBtn.style.fontSize = '1.5em';
  scrollBtn.style.cursor = 'pointer';
  scrollBtn.style.zIndex = '999';
  scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(scrollBtn);

  // Show/hide on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});