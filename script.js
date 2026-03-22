// =============================================
// MOBILE NAV TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// =============================================
// IMAGE SLIDERS
// =============================================
document.querySelectorAll('[data-slider]').forEach(slider => {
  const images = slider.querySelectorAll('img');
  const dots   = slider.querySelectorAll('.slider-dot');
  const prev   = slider.querySelector('.slider-btn.prev');
  const next   = slider.querySelector('.slider-btn.next');
  let current  = 0;

  function goTo(index) {
    images[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + images.length) % images.length;
    images[current].classList.add('active');
    dots[current].classList.add('active');
  }

  if (prev) prev.addEventListener('click', () => goTo(current - 1));
  if (next) next.addEventListener('click', () => goTo(current + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // Auto-advance every 4 seconds (pause on hover)
  let autoPlay = setInterval(() => goTo(current + 1), 4000);
  slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
  slider.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => goTo(current + 1), 4000);
  });
});

// =============================================
// INQUIRY MODAL
// =============================================
const modal        = document.getElementById('inquiryModal');
const modalClose   = document.getElementById('modalClose');
const modalCarName = document.getElementById('modalCarName');
const inquiryForm  = document.getElementById('inquiryForm');
const modalSuccess = document.getElementById('modalSuccess');

function openModal(carName) {
  modalCarName.textContent = carName;
  modalSuccess.style.display = 'none';
  inquiryForm.reset();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.inquire-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.car));
});

if (modalClose) modalClose.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

if (inquiryForm) {
  inquiryForm.addEventListener('submit', e => {
    e.preventDefault();

    const carName = modalCarName.textContent;
    const name    = document.getElementById('inqName').value.trim();
    const email   = document.getElementById('inqEmail').value.trim();
    const phone   = document.getElementById('inqPhone').value.trim();
    const message = document.getElementById('inqMessage').value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent('Upit za ' + carName);
    const body    = encodeURIComponent(
      'Vozilo: ' + carName + '\n' +
      'Ime i prezime: ' + name + '\n' +
      'E-mail: ' + email + '\n' +
      (phone ? 'Telefon: ' + phone + '\n' : '') +
      'Poruka: ' + message
    );

    window.location.href = 'mailto:info@driveeasy.ba?subject=' + subject + '&body=' + body;

    modalSuccess.style.display = 'block';
  });
}

// =============================================
// FILTER BUTTONS (cars.html)
// =============================================
const filterBtns = document.querySelectorAll('.filter-btn');
const carCards   = document.querySelectorAll('#carsGrid .car-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    carCards.forEach(card => {
      const tags = card.dataset.tags || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
