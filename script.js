// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

function toggleMobileNav() {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

navToggle.addEventListener('click', toggleMobileNav);

// Close the mobile menu once a link is tapped, so it doesn't stay open
primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Care tip generator ----------
const careTips = [
  "Check the top inch of soil with your finger before watering — if it's still damp, wait a few more days.",
  "Rotate your plant a quarter turn every week or two so it grows evenly toward the light.",
  "Yellow leaves near the bottom are often normal aging. Yellow leaves everywhere usually means overwatering.",
  "Most houseplants slow down in winter and need noticeably less water than in summer.",
  "Dusty leaves can't photosynthesize well — wipe them down with a damp cloth every few weeks.",
  "Brown, crispy leaf edges are often a sign of low humidity, not underwatering.",
  "Repot when roots start circling the bottom of the pot, usually every 1–2 years for most houseplants."
];

let lastTipIndex = -1;
const tipButton = document.getElementById('tip-button');
const tipText = document.getElementById('tip-text');

function showRandomTip() {
  let index = Math.floor(Math.random() * careTips.length);
  // avoid repeating the same tip twice in a row
  while (index === lastTipIndex && careTips.length > 1) {
    index = Math.floor(Math.random() * careTips.length);
  }
  lastTipIndex = index;
  tipText.textContent = careTips[index];
}

tipButton.addEventListener('click', showRandomTip);

// ---------- Waitlist form ----------
const waitlistForm = document.getElementById('waitlist-form');
const formStatus = document.getElementById('form-status');

function handleWaitlistSubmit(event) {
  event.preventDefault();

  const nameValue = document.getElementById('name').value.trim();
  const emailValue = document.getElementById('email').value.trim();

  if (!nameValue || !emailValue) {
    formStatus.textContent = 'Please fill in both your name and email.';
    formStatus.style.color = '#b5652b';
    return;
  }

  formStatus.textContent = `Thanks, ${nameValue} — we'll email ${emailValue} as soon as a spot opens up.`;
  formStatus.style.color = '';
  waitlistForm.reset();
}

waitlistForm.addEventListener('submit', handleWaitlistSubmit);

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();