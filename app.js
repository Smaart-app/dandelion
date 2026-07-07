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
    heroSecondary: "View services",
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

const heroVideo = document.querySelector("#heroVideo");
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initHeroVideo() {
  if (!heroVideo) return;

  if (reducedMotion) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
  }
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.el;
  const fallbackTranslations = {
    el: {
      heroSecondary: "\u0394\u03b5\u03af\u03c4\u03b5 \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2",
    },
    fr: {
      heroSecondary: "Voir les services",
    },
  };
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key] || fallbackTranslations[lang]?.[key];
    if (value) node.textContent = value;
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

initHeroVideo();
