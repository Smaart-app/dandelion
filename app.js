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

const canvas = document.querySelector("#seedCanvas");
const context = canvas.getContext("2d");
const blowButton = document.querySelector("#blowButton");
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const seeds = [];
let width = 0;
let height = 0;
let gust = 0.68;
let pointerGust = 0;
let lastTime = performance.now();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function resetSeed(seed, fromPuff = false) {
  const sourceX = width < 620 ? width * 0.36 : width * 0.315;
  const sourceY = width < 620 ? height * 0.47 : height * 0.405;
  if (fromPuff) {
    seed.x = randomBetween(sourceX, sourceX + width * 0.035);
    seed.y = randomBetween(sourceY - height * 0.012, sourceY + height * 0.025);
  } else {
    seed.x = randomBetween(sourceX + width * 0.03, width * 0.82);
    const progress = (seed.x - sourceX) / (width * 0.52);
    seed.y = sourceY + progress * height * 0.055 + randomBetween(-height * 0.018, height * 0.024);
  }
  seed.vx = randomBetween(0.09, 0.26) + gust * randomBetween(0.1, 0.24);
  seed.vy = randomBetween(-0.018, 0.045);
  seed.size = randomBetween(0.12, 0.26);
  seed.angle = randomBetween(0, Math.PI * 2);
  seed.spin = randomBetween(-0.012, 0.012);
  seed.life = randomBetween(0.24, 0.48);
}

function seedCountForWidth() {
  if (width < 620) return 12;
  if (width < 980) return 16;
  return 20;
}

function initSeeds() {
  const target = seedCountForWidth();
  while (seeds.length < target) {
    const seed = {};
    resetSeed(seed, false);
    seeds.push(seed);
  }
  seeds.length = target;
}

function drawSeed(seed) {
  context.save();
  context.translate(seed.x, seed.y);
  context.rotate(seed.angle);
  context.globalAlpha = Math.max(0, Math.min(0.42, seed.life));
  context.strokeStyle = "rgba(74, 66, 45, 0.32)";
  context.fillStyle = "rgba(255, 255, 255, 0.56)";
  context.lineWidth = 1;
  const size = seed.size;

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(-5 * size, -13 * size);
  context.stroke();

  for (let i = -2; i <= 2; i += 1) {
    context.beginPath();
    context.moveTo(-5 * size, -13 * size);
    context.quadraticCurveTo((i * 2.5 - 5) * size, -20 * size, (i * 4 - 5) * size, -24 * size);
    context.strokeStyle = "rgba(255, 255, 255, 0.5)";
    context.stroke();
  }

  context.beginPath();
  context.ellipse(1.2 * size, 2.8 * size, 1.6 * size, 4.2 * size, -0.2, 0, Math.PI * 2);
  context.fillStyle = "rgba(83, 50, 28, 0.58)";
  context.fill();
  context.restore();
}

function animate(now) {
  const delta = Math.min(36, now - lastTime);
  lastTime = now;
  context.clearRect(0, 0, width, height);

  if (!reducedMotion) {
    gust = 0.62 + Math.sin(now / 950) * 0.12 + pointerGust;
    pointerGust *= 0.965;
  }

  for (const seed of seeds) {
    const drift = Math.sin(now / 900 + seed.y * 0.015) * 0.15;
    seed.x += (seed.vx + gust * 0.42 + drift) * (delta / 16);
    seed.y += (seed.vy + Math.sin(now / 720 + seed.x * 0.01) * 0.1) * (delta / 16);
    seed.angle += seed.spin * (delta / 16);
    seed.life -= 0.0007 * (delta / 16);

    if (seed.x > width + 18 || seed.y < height * 0.34 || seed.y > height * 0.58 || seed.life <= 0.035) {
      resetSeed(seed, true);
    }

    drawSeed(seed);
  }

  requestAnimationFrame(animate);
}

function puff() {
  pointerGust = 1.55;
  for (let i = 0; i < Math.min(9, seeds.length); i += 1) {
    resetSeed(seeds[i], true);
    seeds[i].vx += randomBetween(0.35, 0.72);
    seeds[i].vy += randomBetween(-0.045, 0.055);
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
  if (event.clientX > width * 0.27 && event.clientX < width * 0.58 && event.clientY > height * 0.34 && event.clientY < height * 0.54) {
    pointerGust = Math.min(0.58, pointerGust + 0.025);
  }
});
window.addEventListener("resize", () => {
  resizeCanvas();
  initSeeds();
});

resizeCanvas();
initSeeds();
requestAnimationFrame(animate);
