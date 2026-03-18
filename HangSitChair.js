/* HangSitChair.js — ZAKKA & CO. */

// 1: Fixed CTA bar on scroll
window.addEventListener('scroll', () => {
  const bar = document.getElementById('fixed-cta');
  if (window.scrollY > 300) {
    bar.style.opacity = '1';
    bar.style.pointerEvents = 'auto';
  } else {
    bar.style.opacity = '0';
    bar.style.pointerEvents = 'none';
  }
});

// 2: IntersectionObserver — section fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 3: FAQ accordion (details/summary native, + JS class toggle for chevron)
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    // Already handled by <details> native behavior
  });
});

// 4: Color selector
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.color-btn').forEach(b => {b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false'); // ここを追加
    });

    // 2. クリックされたボタンを「選択状態」にする
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true'); // ここを追加

    // Update color display text
    const colorName = btn.dataset.color;
    const display = document.getElementById('selected-color');
    if (display) display.textContent = colorName;
  });
});


// Hero fade-in on load
window.addEventListener('DOMContentLoaded', () => {
  ['.hero-text-area', '.hero-visual-area'].forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (el) setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 150);
  });
});
