const translations = {
  el: {
    brandSub: "Σύμβουλοι",
    navServices: "Υπηρεσίες",
    navMethod: "Προσέγγιση",
    navContact: "Επικοινωνία",
    eyebrow: "Συμβουλευτική με καθαρότητα",
    heroTitle: "Καθαρές σκέψεις. Σωστές αποφάσεις.",
    heroText: "Σας βοηθάμε να δείτε την εικόνα καθαρά, να αξιοποιήσετε τις ευκαιρίες και να προχωρήσετε με σιγουριά.",
    heroCta: "Ας μιλήσουμε",
    blowButton: "Φύσηξε τον κλέφτη",
    servicesEyebrow: "Πού βοηθάμε",
    servicesTitle: "Συμβουλές που κάνουν τη διαφορά",
    strategyTitle: "Στρατηγική",
    strategyText: "Σαφής κατεύθυνση, προτεραιότητες και μετρήσιμα αποτελέσματα.",
    growthTitle: "Ανάπτυξη",
    growthText: "Βιώσιμες λύσεις για μακροπρόθεσμη αξία.",
    peopleTitle: "Ανθρώπινο Δυναμικό",
    peopleText: "Ενδυναμώνουμε τους ανθρώπους στον πυρήνα της επιτυχίας.",
    performanceTitle: "Απόδοση",
    performanceText: "Βελτιστοποιούμε διαδικασίες και ενισχύουμε αποτελέσματα.",
    methodEyebrow: "Η προσέγγισή μας",
    methodTitle: "Από την πρώτη ιδέα μέχρι την εφαρμογή.",
    methodText: "Συνδυάζουμε ανάλυση, ανθρώπινη κατανόηση και πρακτικό σχεδιασμό ώστε κάθε αλλαγή να μπορεί να σταθεί στην καθημερινότητα της ομάδας.",
    stepOne: "Διάγνωση",
    stepTwo: "Σχεδιασμός",
    stepThree: "Υλοποίηση",
    contactEyebrow: "Ξεκινάμε",
    contactTitle: "Μια καθαρή συζήτηση αρκεί.",
    contactCta: "Κλείστε συνάντηση",
  },
  en: {
    brandSub: "Consultants",
    navServices: "Services",
    navMethod: "Method",
    navContact: "Contact",
    eyebrow: "Consulting with clarity",
    heroTitle: "Clear thinking. Better decisions.",
    heroText: "We help you see the whole picture, use opportunities well, and move forward with confidence.",
    heroCta: "Let's talk",
    blowButton: "Blow the dandelion",
    servicesEyebrow: "Where we help",
    servicesTitle: "Advice that makes a difference",
    strategyTitle: "Strategy",
    strategyText: "Clear direction, sharper priorities, and measurable outcomes.",
    growthTitle: "Growth",
    growthText: "Sustainable solutions built for long-term value.",
    peopleTitle: "People",
    peopleText: "We strengthen the people at the heart of success.",
    performanceTitle: "Performance",
    performanceText: "We improve processes and raise results.",
    methodEyebrow: "Our method",
    methodTitle: "From first insight to real adoption.",
    methodText: "We combine analysis, human understanding, and practical planning so change can hold up inside everyday team life.",
    stepOne: "Diagnose",
    stepTwo: "Design",
    stepThree: "Deliver",
    contactEyebrow: "Start here",
    contactTitle: "One clear conversation is enough.",
    contactCta: "Book a meeting",
  },
  fr: {
    brandSub: "Conseil",
    navServices: "Services",
    navMethod: "Méthode",
    navContact: "Contact",
    eyebrow: "Conseil avec clarté",
    heroTitle: "Pensées claires. Décisions justes.",
    heroText: "Nous vous aidons à voir l'ensemble, saisir les opportunités et avancer avec assurance.",
    heroCta: "Échangeons",
    blowButton: "Souffler le pissenlit",
    servicesEyebrow: "Nos domaines",
    servicesTitle: "Des conseils qui font la différence",
    strategyTitle: "Stratégie",
    strategyText: "Une direction claire, des priorités nettes et des résultats mesurables.",
    growthTitle: "Croissance",
    growthText: "Des solutions durables pour créer de la valeur à long terme.",
    peopleTitle: "Humain",
    peopleText: "Nous renforçons les personnes au coeur de la réussite.",
    performanceTitle: "Performance",
    performanceText: "Nous optimisons les processus et améliorons les résultats.",
    methodEyebrow: "Notre méthode",
    methodTitle: "De l'idée initiale à l'application concrète.",
    methodText: "Nous associons analyse, compréhension humaine et planification pratique pour que chaque changement trouve sa place dans le quotidien des équipes.",
    stepOne: "Diagnostic",
    stepTwo: "Conception",
    stepThree: "Déploiement",
    contactEyebrow: "Commençons",
    contactTitle: "Une conversation claire suffit.",
    contactCta: "Planifier un rendez-vous",
  },
};

const seedField = document.querySelector("#seedField");
const blowButton = document.querySelector("#blowButton");
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const seeds = [];
let width = 0;
let height = 0;
let lastTime = performance.now();
let lastPointerPuff = 0;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function measureSeedField() {
  width = seedField.clientWidth;
  height = seedField.clientHeight;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function seedSource() {
  if (width < 620) {
    return {
      x: width * 0.52,
      y: height * 0.44,
    };
  }

  if (width < 980) {
    return {
      x: width * 0.42,
      y: height * 0.42,
    };
  }

  return {
    x: width * 0.35,
    y: height * 0.4,
  };
}

function seedBounds() {
  const source = seedSource();
  return {
    minX: source.x - width * 0.005,
    maxX: width * 0.83,
    minY: source.y - height * 0.018,
    maxY: source.y + height * 0.19,
  };
}

function launchSeed(seed, delay = 0) {
  const source = seedSource();
  seed.x = source.x + randomBetween(width * 0.005, width * 0.035);
  seed.y = source.y + randomBetween(-height * 0.008, height * 0.018);
  seed.vx = randomBetween(0.22, 0.46);
  seed.vy = randomBetween(-0.006, 0.022);
  seed.size = randomBetween(0.72, 1.08);
  seed.angle = randomBetween(0, Math.PI * 2);
  seed.spin = randomBetween(-0.014, 0.014);
  seed.life = 0;
  seed.maxLife = randomBetween(0.68, 0.96);
  seed.delay = delay;
  seed.el.style.opacity = "0";
}

function seedCountForWidth() {
  if (width < 620) return 7;
  if (width < 980) return 8;
  return 9;
}

function initSeeds() {
  const target = seedCountForWidth();
  while (seeds.length < target) {
    const el = document.createElement("span");
    el.className = "animated-seed";
    seedField.append(el);
    seeds.push({ el });
  }

  for (const seed of seeds) {
    launchSeed(seed, randomBetween(0, 1.2));
  }

  while (seeds.length > target) {
    const seed = seeds.pop();
    seed.el.remove();
  }
  seeds.length = target;
}

function renderSeed(seed) {
  const fadeIn = Math.min(1, seed.life / 0.16);
  const fadeOut = Math.min(1, (seed.maxLife - seed.life) / 0.22);
  const opacity = Math.max(0, Math.min(0.54, fadeIn, fadeOut));
  seed.el.style.opacity = String(opacity);
  seed.el.style.transform = `translate3d(${seed.x}px, ${seed.y}px, 0) rotate(${seed.angle}rad) scale(${seed.size})`;
}

function animate(now) {
  const delta = Math.min(36, now - lastTime);
  lastTime = now;

  if (reducedMotion) {
    return;
  }

  for (const seed of seeds) {
    const bounds = seedBounds();
    if (seed.delay > 0) {
      seed.delay -= delta / 1000;
      continue;
    }

    const drift = Math.sin(now / 840 + seed.x * 0.01) * 0.038;
    seed.x += (seed.vx + drift) * (delta / 16);
    seed.y += (seed.vy + Math.sin(now / 980 + seed.x * 0.008) * 0.018) * (delta / 16);
    seed.angle += seed.spin * (delta / 16);
    seed.life += 0.006 * (delta / 16);

    if (seed.x < bounds.minX || seed.x > bounds.maxX || seed.y < bounds.minY || seed.y > bounds.maxY || seed.life >= seed.maxLife) {
      launchSeed(seed, randomBetween(0.25, 1.4));
      continue;
    }

    renderSeed(seed);
  }

  requestAnimationFrame(animate);
}

function puff() {
  for (let i = 0; i < Math.min(7, seeds.length); i += 1) {
    launchSeed(seeds[i], i * 0.04);
    seeds[i].vx += randomBetween(0.22, 0.46);
    seeds[i].vy += randomBetween(-0.004, 0.026);
  }
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.el;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

blowButton.addEventListener("click", puff);
window.addEventListener("pointermove", (event) => {
  const source = seedSource();
  const now = performance.now();
  if (event.clientX > source.x - width * 0.07 && event.clientX < source.x + width * 0.22 && event.clientY > source.y - height * 0.1 && event.clientY < source.y + height * 0.14 && now - lastPointerPuff > 900) {
    lastPointerPuff = now;
    puff();
  }
});
window.addEventListener("resize", () => {
  measureSeedField();
  initSeeds();
});

measureSeedField();
initSeeds();
requestAnimationFrame(animate);
