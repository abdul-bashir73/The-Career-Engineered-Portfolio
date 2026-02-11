(function () {
  const yearEl = document.getElementById("year");
  const themeBtn = document.getElementById("themeBtn");

  // Auto year
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle (saved)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "" : "light";
      if (next) document.documentElement.setAttribute("data-theme", next);
      else document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", next || "dark");
    });
  }

  // ====== EDIT THESE DEFAULTS ======
  const PROFILE = {
    name: "YOUR NAME",
    headline: "NJIT Student • PM / Analytics / Systems",
    heroLine: "I help teams turn messy work into clean, shippable outcomes.",
    seeking: "Summer 2026 internships in NJ/NY (PM / BA / Tech).",
    target: "Recruiters • NJ/NY internships",
    focus: "PM • Analytics • Systems",
    proof: "Case studies + GitHub",
    email: "you@example.com",
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://www.linkedin.com/in/YOUR_USERNAME/",
    ctaText: "Request My Resume"
  };

  // Inject profile text
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("brandName", PROFILE.name);
  setText("footerName", PROFILE.name);
  setText("heroTitle", PROFILE.heroLine);
  setText("seekingText", PROFILE.seeking);
  setText("targetValue", PROFILE.target);
  setText("focusValue", PROFILE.focus);
  setText("proofValue", PROFILE.proof);

  const ctaBtn = document.getElementById("ctaBtn");
  if (ctaBtn) ctaBtn.textContent = PROFILE.ctaText;

  const emailDirect = document.getElementById("emailDirect");
  if (emailDirect) {
    emailDirect.textContent = PROFILE.email;
    emailDirect.href = `mailto:${PROFILE.email}`;
  }

  const githubLink = document.getElementById("githubLink");
  if (githubLink && PROFILE.github) githubLink.href = PROFILE.github;

  const linkedinLink = document.getElementById("linkedinLink");
  if (linkedinLink && PROFILE.linkedin) linkedinLink.href = PROFILE.linkedin;

  // Contact form: creates a mailto draft (no backend required)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`${PROFILE.ctaText} — ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from portfolio site`
      );

      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    });
  }
})();
