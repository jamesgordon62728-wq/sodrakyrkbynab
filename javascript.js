/* ═══════════════════════════════════════════════
   Södra Kyrkbyn AB — Shared JavaScript
   ═══════════════════════════════════════════════ */

// ── Set current year in footer ──
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark active nav link based on current page filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === page) {
      link.classList.add('active');
    }
  });

  // Restore saved language preference
  const savedLang = localStorage.getItem('sk-lang') || 'en';
  applyLang(savedLang);
});

// ── Language switcher ──
function setLang(lang) {
  localStorage.setItem('sk-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  const enBtn = document.getElementById('lang-en');
  const svBtn = document.getElementById('lang-sv');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (svBtn) svBtn.classList.toggle('active', lang === 'sv');

  document.querySelectorAll('[data-en]').forEach(function (el) {
    const val = el.getAttribute('data-' + lang);
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
}
