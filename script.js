function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


window.addEventListener('scroll', function() {
    var btn = document.getElementById('btn-back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});


items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const rect = item.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    // REMOVE transição momentaneamente
    indicator.style.transition = 'none';

    // Posiciona direto no item atual
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - menuRect.left}px`;

    // FORÇA reflow (truque importante)
    indicator.offsetHeight;

    // Reativa a transição suave
    indicator.style.transition = 'all 0.3s ease';
  });
});

// Opcional: esconder ao sair do menu
menu.addEventListener('mouseleave', () => {
  indicator.style.opacity = '0';
});
menu.addEventListener('mouseenter', () => {
  indicator.style.opacity = '1';
});
