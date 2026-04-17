// =============================================
// TRANSLATIONS
// To add a new language: add a new top-level key (e.g. 'de')
// matching all keys present in 'en' and 'sr'.
// =============================================
const translations = {

  en: {
    // Nav
    nav_home:     'Home',
    nav_cars:     'Cars',
    nav_contact:  'Contact',
    nav_cta:      'Browse Vehicles',
    nav_cta_rent: 'Rent Now',

    // Hero
    hero_eyebrow:         'Rent a car MM — Banja Luka, BiH',
    hero_title_1:         'The right car,',
    hero_title_2:         'the right price.',
    hero_desc:            'Rent a vehicle from our well-maintained fleet. Transparent daily rates, no hidden fees, and flexible pickup options.',
    hero_btn_fleet:       'Browse Cars',
    hero_btn_contact:     'Contact Us',
    hero_stat_vehicles:   'Vehicles in fleet',
    hero_stat_clients:    'Happy clients',
    hero_stat_experience: 'On the market',
    hero_badge_from:      'from',
    hero_badge_per:       '/ day',

    // Fleet section
    featured_eyebrow: 'Vehicles',
    featured_heading: 'Our vehicles',
    featured_all:     'All cars',

    // Why us
    why_eyebrow: 'Why us',
    why_heading: 'Drive without worries.',
    why_desc:    'Our team takes care of every detail to make your rental experience simple, reliable and pleasant.',
    why_btn:     'Choose a car',
    why_f1_h:    'Wide vehicle selection',
    why_f1_p:    'Over 50 vehicles, from economical city cars to premium sedans for every need.',
    why_f2_h:    'Transparent pricing',
    why_f2_p:    'No hidden fees. What you see in the offer is what you pay — clear, fair, no surprises.',
    why_f3_h:    'Flexible pickup',
    why_f3_p:    'Pickup and return at multiple locations. We adapt to your schedule.',
    why_f4_h:    'Regularly maintained',
    why_f4_p:    'Every vehicle undergoes regular technical inspections. Drive with confidence every time.',

    // Contact section
    contact_eyebrow:     'Contact',
    contact_heading:     'Write to us.',
    contact_desc:        'Our team is available Monday to Saturday, 8am–8pm. Feel free to call or send a message.',
    contact_lbl_phone:   'Phone',
    contact_lbl_email:   'E-mail',
    contact_lbl_address: 'Address',
    contact_lbl_name:    'Full name',
    contact_lbl_emailf:  'E-mail address',
    contact_lbl_msg:     'Message',
    contact_ph_name:     'e.g. John Smith',
    contact_ph_email:    'your@email.com',
    contact_ph_msg:      'Which car are you interested in, dates, questions...',
    contact_submit:      'Send message',
    contact_success:     'Message sent successfully. Thank you!',
    contact_error:       'Error sending. Please try again.',

    // Inquiry modal
    modal_title:      'Send inquiry',
    modal_car_label:  'Inquiry for:',
    modal_lbl_name:   'Full name',
    modal_lbl_email:  'E-mail address',
    modal_lbl_phone:  'Phone',
    modal_phone_opt:  '(optional)',
    modal_lbl_msg:    'Message',
    modal_ph_name:    'e.g. John Smith',
    modal_ph_email:   'your@email.com',
    modal_ph_phone:   '+1 234 567 890',
    modal_ph_msg:     'Rental dates, questions, etc.',
    modal_submit:     'Send inquiry',
    modal_success:    'Inquiry sent successfully. We will contact you soon!',
    modal_error:      'Error sending. Please try again.',

    // Cars page
    page_eyebrow: 'Our offer',
    page_heading:  'Our vehicles',
    page_desc:     'Well-maintained vehicles at transparent prices. Filter by transmission or fuel type.',

    // Filter bar
    filter_label:     'Filter',
    filter_all:       'All cars',
    filter_automatic: 'Automatic',
    filter_manual:    'Manual',
    filter_diesel:    'Diesel',
    filter_petrol:    'Petrol',

    // Car cards
    tag_diesel:    'Diesel',
    tag_petrol:    'Petrol',
    tag_automatic: 'Automatic',
    tag_manual:    'Manual',
    tag_sedan:     'Sedan',
    tag_hatchback: 'Hatchback',
    tag_seats:     '5 seats',
    tag_per_day:   '/ day',
    tag_inquiry:   'Inquiry',

    // Pricing tiers
    price_1_2:     '1–2 days',
    price_3_6:     '3–6 days',
    price_7_30:    '7–30 days',

    // Lightbox
    lightbox_close: 'Close',
    lightbox_prev:  'Previous',
    lightbox_next:  'Next',

    // Footer
    footer_desc:      'Premium vehicle rental in Banja Luka and surroundings. Reliable, transparent and flexible.',
    footer_nav_h:     'Navigation',
    footer_contact_h: 'Contact',
    footer_home:      'Home',
    footer_cars:      'Cars',
    footer_contact:   'Contact',
    footer_hours:     'Mon-Sun, 9:00–21:00',
    footer_copy:      '© 2026 Rent a car MM. All rights reserved.',

    // Loading state
    sending: 'Sending…',

    // Email template internals
    phone_not_provided: 'Not provided',
    general_inquiry:    'General inquiry',
  },

  sr: {
    // Nav
    nav_home:     'Početna',
    nav_cars:     'Vozila',
    nav_contact:  'Kontakt',
    nav_cta:      'Pregledaj flotu',
    nav_cta_rent: 'Iznajmi odmah',

    // Hero
    hero_eyebrow:         'Rent a car MM — Banja Luka, BiH',
    hero_title_1:         'Pravi auto,',
    hero_title_2:         'prave cijene.',
    hero_desc:            'Iznajmite vozilo iz naše dobro održavane flote. Transparentne dnevne cijene, bez skrivenih naknada i uz fleksibilne opcije preuzimanja.',
    hero_btn_fleet:       'Pregledaj vozila',
    hero_btn_contact:     'Kontaktirajte nas',
    hero_stat_vehicles:   'Vozila u ponudi',
    hero_stat_clients:    'Zadovoljnih klijenata',
    hero_stat_experience: 'Na tržištu',
    hero_badge_from:      'od',
    hero_badge_per:       '/ dan',

    // Fleet section
    featured_eyebrow: 'Vozila',
    featured_heading: 'Naša vozila',
    featured_all:     'Sva vozila',

    // Why us
    why_eyebrow: 'Zašto mi',
    why_heading: 'Vozite bez brige.',
    why_desc:    'Naš tim brine o svakom detalju kako bi vaše iskustvo iznajmljivanja bilo jednostavno, pouzdano i ugodno.',
    why_btn:     'Odaberi vozilo',
    why_f1_h:    'Širok izbor vozila',
    why_f1_p:    'Više od 50 vozila, od ekonomičnih gradskih automobila do premium sedana za svaku potrebu.',
    why_f2_h:    'Transparentne cijene',
    why_f2_p:    'Bez skrivenih naknada. Šta vidite u ponudi, to i plaćate — jasno, pošteno i bez iznenađenja.',
    why_f3_h:    'Fleksibilno preuzimanje',
    why_f3_p:    'Preuzimanje i vraćanje na više lokacija. Prilagođavamo se vašem rasporedu.',
    why_f4_h:    'Redovno održavana vozila',
    why_f4_p:    'Svako vozilo prolazi redovne tehničke preglede. Vozite s povjerenjem svaki put.',

    // Contact section
    contact_eyebrow:     'Kontakt',
    contact_heading:     'Pišite nam.',
    contact_desc:        'Naš tim je dostupan od ponedjeljka do nedjelje, 9:00–21:00. Slobodno nas pozovite ili pošaljite poruku.',
    contact_lbl_phone:   'Telefon',
    contact_lbl_email:   'E-mail',
    contact_lbl_address: 'Adresa',
    contact_lbl_name:    'Ime i prezime',
    contact_lbl_emailf:  'E-mail adresa',
    contact_lbl_msg:     'Poruka',
    contact_ph_name:     'npr. Marko Ćetković',
    contact_ph_email:    'vas@email.com',
    contact_ph_msg:      'Koji automobil vas zanima, datumi, pitanja...',
    contact_submit:      'Pošalji poruku',
    contact_success:     'Poruka je uspješno poslana. Hvala vam!',
    contact_error:       'Greška pri slanju. Molimo pokušajte ponovo.',

    // Inquiry modal
    modal_title:      'Pošalji upit',
    modal_car_label:  'Upit za:',
    modal_lbl_name:   'Ime i prezime',
    modal_lbl_email:  'E-mail adresa',
    modal_lbl_phone:  'Telefon',
    modal_phone_opt:  '(opciono)',
    modal_lbl_msg:    'Poruka',
    modal_ph_name:    'npr. Marko Ćetković',
    modal_ph_email:   'vas@email.com',
    modal_ph_phone:   '+387 65 000 000',
    modal_ph_msg:     'Datumi iznajmljivanja, pitanja, itd.',
    modal_submit:     'Pošalji upit',
    modal_success:    'Upit je uspješno poslan. Kontaktiraćemo vas uskoro!',
    modal_error:      'Greška pri slanju. Molimo pokušajte ponovo.',

    // Cars page
    page_eyebrow: 'Naša ponuda',
    page_heading:  'Naša flota',
    page_desc:     'Dobro održavana vozila po transparentnim cijenama. Filtriraj po tipu pogona ili mjenjača.',

    // Filter bar
    filter_label:     'Filtriraj',
    filter_all:       'Sva vozila',
    filter_automatic: 'Automatik',
    filter_manual:    'Manuelni',
    filter_diesel:    'Dizel',
    filter_petrol:    'Benzin',

    // Car cards
    tag_diesel:    'Dizel',
    tag_petrol:    'Benzin',
    tag_automatic: 'Automatik',
    tag_manual:    'Manuelni',
    tag_sedan:     'Sedan',
    tag_hatchback: 'Hečbek',
    tag_seats:     '5 mjesta',
    tag_per_day:   '/ dan',
    tag_inquiry:   'Upit',

    // Pricing tiers
    price_1_2:     '1–2 dana',
    price_3_6:     '3–6 dana',
    price_7_30:    '7–30 dana',

    // Lightbox
    lightbox_close: 'Zatvori',
    lightbox_prev:  'Prethodna',
    lightbox_next:  'Sljedeća',

    // Footer
    footer_desc:      'Premium iznajmljivanje vozila u Banja Luci i okolici. Pouzdano, transparentno i fleksibilno.',
    footer_nav_h:     'Navigacija',
    footer_contact_h: 'Kontakt',
    footer_home:      'Početna',
    footer_cars:      'Vozila',
    footer_contact:   'Kontakt',
    footer_hours:     'Pon-Ned, 9:00–21:00',
    footer_copy:      '© 2026 Rent a car MM. Sva prava zadržana.',

    // Loading state
    sending: 'Slanje…',

    // Email template internals
    phone_not_provided: 'Nije navedeno',
    general_inquiry:    'Opšti upit',
  },
};

// =============================================
// I18N ENGINE
// =============================================
(function () {
  let currentLang = 'sr';

  function t(key) {
    return (translations[currentLang] || translations.sr)[key] || key;
  }

  function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const val = t(el.dataset.i18nPh);
      if (val) el.placeholder = val;
    });

    // Aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = t(el.dataset.i18nAria);
      if (val) el.setAttribute('aria-label', val);
    });

    // Sync lang-btn active state across all pages
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = currentLang;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Optionally reflect in URL without reloading
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);

    applyTranslations();
  }

  function init() {
    // Priority: URL param → localStorage → default 'sr'
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && translations[urlLang]) {
      currentLang = urlLang;
      localStorage.setItem('lang', urlLang);
    } else {
      currentLang = localStorage.getItem('lang') || 'sr';
    }

    applyTranslations();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  // Expose for script.js to consume
  window.i18n = {
    t,
    setLanguage,
    get currentLang() { return currentLang; },
  };

  // Init synchronously — scripts are at end of <body>, DOM is ready
  init();
})();
