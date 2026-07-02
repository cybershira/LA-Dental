// =============================================
// MOBILE NAVIGATION TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
}


// =============================================
// SMOOTH PAGE TRANSITIONS
// Fades out before navigating to a service page
// or back to the home page.
// =============================================
document.querySelectorAll('a.service-card, a.back-btn').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto')) return;
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function () {
      window.location.href = href;
    }, 300);
  });
});


// =============================================
// REVIEWS SLIDER
// Clicking the arrows scrolls the review track
// left or right by one card width.
// =============================================
const track = document.getElementById('reviewsTrack');
const prevBtn = document.getElementById('reviewPrev');
const nextBtn = document.getElementById('reviewNext');

if (track && prevBtn && nextBtn) {
  const scrollAmount = 320; // roughly one card + gap

  nextBtn.addEventListener('click', function () {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', function () {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
}
