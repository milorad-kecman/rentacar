// =============================================
// EMAILJS CONFIGURATION
// Fill these in from your EmailJS dashboard:
//   Public Key  → Account → General → Public Key
//   Service ID  → Email Services → your service
//   Template ID → Email Templates → your template
//
// Template variables expected by EmailJS:
//   {{car_name}}   — name of the car (or "General inquiry")
//   {{from_name}}  — sender's full name
//   {{from_email}} — sender's email address
//   {{phone}}      — phone number (or "Not provided")
//   {{message}}    — message body
// =============================================
const EMAILJS_CONFIG = {
  publicKey:  'z_SuSd7Q4rL8jVF4p',
  serviceID:  'service_g77617o',
  templateID: 'template_e62jv0o',
};

emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

// =============================================
// HELPERS
// =============================================
function setBtn(btn, loading) {
  btn.disabled = loading;
  if (loading) {
    btn.dataset.savedText = btn.textContent;
    btn.textContent = (window.i18n ? window.i18n.t('sending') : 'Slanje…');
  } else {
    btn.textContent = btn.dataset.savedText || btn.textContent;
    delete btn.dataset.savedText;
  }
}

function showFeedback(successEl, errorEl, isSuccess) {
  if (successEl) successEl.style.display = isSuccess  ? 'block' : 'none';
  if (errorEl)   errorEl.style.display   = !isSuccess ? 'block' : 'none';
}

function hideFeedback(successEl, errorEl) {
  if (successEl) successEl.style.display = 'none';
  if (errorEl)   errorEl.style.display   = 'none';
}

// =============================================
// SCROLL REVEAL — IntersectionObserver
// =============================================
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

// =============================================
// MOBILE NAV TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

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

  slider.addEventListener('mouseenter', () => { if (images.length > 1) goTo(1); });
  slider.addEventListener('mouseleave', () => goTo(0));
});

// =============================================
// INQUIRY MODAL
// =============================================
const modal        = document.getElementById('inquiryModal');
const modalClose   = document.getElementById('modalClose');
const modalCarName = document.getElementById('modalCarName');
const inquiryForm  = document.getElementById('inquiryForm');
const modalSuccess = document.getElementById('modalSuccess');
const modalError   = document.getElementById('modalError');
const modalSubmit  = document.getElementById('modalSubmit');

function openModal(carName) {
  modalCarName.textContent = carName;
  hideFeedback(modalSuccess, modalError);
  inquiryForm.reset();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.inquire-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.car-card')?.querySelector('.car-name')?.textContent.trim() || btn.dataset.car;
    openModal(name);
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

if (inquiryForm && modalSubmit) {
  inquiryForm.addEventListener('submit', async e => {
    e.preventDefault();
    hideFeedback(modalSuccess, modalError);

    const name    = document.getElementById('inqName').value.trim();
    const email   = document.getElementById('inqEmail').value.trim();
    const phone   = document.getElementById('inqPhone').value.trim();
    const message = document.getElementById('inqMessage').value.trim();

    if (!name || !email || !message) return;

    setBtn(modalSubmit, true);

    try {
      await emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, {
        car_name:   modalCarName.textContent,
        from_name:  name,
        from_email: email,
        phone:      phone || (window.i18n ? window.i18n.t('phone_not_provided') : 'N/A'),
        message,
      });

      showFeedback(modalSuccess, modalError, true);
      inquiryForm.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showFeedback(modalSuccess, modalError, false);
    } finally {
      setBtn(modalSubmit, false);
    }
  });
}

// =============================================
// CONTACT FORM (index.html)
// =============================================
const contactForm    = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const contactError   = document.getElementById('contactError');
const contactSubmit  = document.getElementById('contactSubmit');

if (contactForm && contactSubmit) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    hideFeedback(contactSuccess, contactError);

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    setBtn(contactSubmit, true);

    try {
      await emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, {
        car_name:   (window.i18n ? window.i18n.t('general_inquiry') : 'General inquiry'),
        from_name:  name,
        from_email: email,
        phone:      window.i18n ? window.i18n.t('phone_not_provided') : 'N/A',
        message,
      });

      showFeedback(contactSuccess, contactError, true);
      contactForm.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showFeedback(contactSuccess, contactError, false);
    } finally {
      setBtn(contactSubmit, false);
    }
  });
}

// =============================================
// FLEET PAGINATION (index.html)
// =============================================
(function () {
  const grid    = document.getElementById('featuredGrid');
  const prevBtn = document.getElementById('fleetPrev');
  const nextBtn = document.getElementById('fleetNext');
  const numsEl  = document.getElementById('fleetPageNums');
  if (!grid || !prevBtn || !nextBtn || !numsEl) return;

  const cards      = Array.from(grid.querySelectorAll('.car-card'));
  const PER_PAGE   = 6;
  const totalPages = Math.ceil(cards.length / PER_PAGE);
  let   current    = 1;

  // Hide pagination entirely when everything fits on one page
  if (totalPages <= 1) {
    document.getElementById('fleetPagination').style.display = 'none';
    return;
  }

  // Build numbered page buttons
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className  = 'fleet-page-num';
    btn.textContent = i;
    numsEl.appendChild(btn);
  }

  function goTo(page, scroll) {
    current = page;
    const start = (page - 1) * PER_PAGE;
    const end   = start + PER_PAGE;

    cards.forEach((card, i) => {
      card.style.display = (i >= start && i < end) ? '' : 'none';
    });

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    numsEl.querySelectorAll('.fleet-page-num').forEach((btn, i) => {
      btn.classList.toggle('active', i + 1 === page);
    });

    if (scroll) {
      document.getElementById('vozila').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  prevBtn.addEventListener('click', () => { if (current > 1) goTo(current - 1, true); });
  nextBtn.addEventListener('click', () => { if (current < totalPages) goTo(current + 1, true); });
  numsEl.querySelectorAll('.fleet-page-num').forEach((btn, i) => {
    btn.addEventListener('click', () => goTo(i + 1, true));
  });

  // Initialise — show first page without scrolling
  goTo(1, false);
})();

// =============================================
// LIGHTBOX
// =============================================
(function () {
  const overlay  = document.getElementById('lightbox');
  if (!overlay) return;

  const imgEl    = document.getElementById('lightboxImg');
  const prevBtn  = document.getElementById('lightboxPrev');
  const nextBtn  = document.getElementById('lightboxNext');
  const closeBtn = document.getElementById('lightboxClose');
  const dotsEl   = document.getElementById('lightboxDots');
  const counter  = document.getElementById('lightboxCounter');

  let slides  = []; // [{ src, alt }, ...]
  let current = 0;

  function renderDots() {
    dotsEl.innerHTML = '';
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'lightbox-dot' + (i === current ? ' active' : '');
      btn.setAttribute('aria-label', `Slajd ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(btn);
    });
    // Hide nav arrows when there's only one image
    const single = slides.length <= 1;
    prevBtn.style.display = single ? 'none' : '';
    nextBtn.style.display = single ? 'none' : '';
    dotsEl.style.display  = single ? 'none' : '';
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    imgEl.style.opacity = '0';
    // Swap src after brief fade so the image doesn't "pop"
    setTimeout(() => {
      imgEl.src = slides[current].src;
      imgEl.alt = slides[current].alt;
      imgEl.style.opacity = '1';
    }, 120);
    counter.textContent = `${current + 1} / ${slides.length}`;
    dotsEl.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function open(sliderEl, startIndex) {
    const imgs = sliderEl.querySelectorAll('img');
    slides  = Array.from(imgs).map(img => ({ src: img.src, alt: img.alt }));
    current = startIndex;
    renderDots();
    // Set initial image without fade
    imgEl.src = slides[current].src;
    imgEl.alt = slides[current].alt;
    imgEl.style.opacity = '1';
    counter.textContent = `${current + 1} / ${slides.length}`;
    dotsEl.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { imgEl.src = ''; }, 280);
  }

  // Click on slider area (not on nav buttons or dots) opens lightbox
  document.querySelectorAll('[data-slider]').forEach(slider => {
    slider.addEventListener('click', e => {
      if (e.target.closest('.slider-btn') || e.target.closest('.slider-dots')) return;
      const imgs   = slider.querySelectorAll('img');
      const active = Array.from(imgs).findIndex(img => img.classList.contains('active'));
      open(slider, active >= 0 ? active : 0);
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  let touchStartX = 0;
  let touchActive = false;
  overlay.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; touchActive = true; }, { passive: true });
  overlay.addEventListener('touchcancel', () => { touchActive = false; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    if (!touchActive || !overlay.classList.contains('open')) return;
    touchActive = false;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();

// =============================================
// FILTER BUTTONS (cars.html)
// =============================================
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const carCards   = document.querySelectorAll('#carsGrid .car-card');
  if (!filterBtns.length || !carCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      carCards.forEach(card => {
        const tags = card.dataset.tags || '';
        card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
      });
    });
  });
})();
