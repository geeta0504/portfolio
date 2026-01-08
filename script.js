const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const tables = document.querySelectorAll('.skills-table');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.3 }
);

tables.forEach(table => observer.observe(table));
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});

const copyEmailBtn = document.getElementById('copy-email');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const emailLink = document.querySelector('.contact-details a[href^="mailto:"]');
    const email = emailLink ? emailLink.textContent.trim() : 'sainigeetanjali0504@gmail.com';
    try {
      // Use Clipboard API when available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      // Show accessible status message
      const status = document.getElementById('contact-status');
      if (status) {
        status.textContent = 'Email copied to clipboard!';
        status.style.display = 'block';
        setTimeout(() => { status.style.display = 'none'; }, 2500);
      }

      // Temporary button feedback
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = 'COPIED!';
      copyEmailBtn.disabled = true;
      setTimeout(() => { copyEmailBtn.textContent = originalText; copyEmailBtn.disabled = false; }, 2000);
    } catch (err) {
      // Minimal user-visible fallback
      alert('Unable to copy email to clipboard');
      console.error('Copy failed:', err);
    }
  });
}
