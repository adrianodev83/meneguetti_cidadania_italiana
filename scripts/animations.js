// Mostrar ícones da seção de diferenciais ao entrar na tela
const observerDiferenciais = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const icons = entry.target.querySelectorAll('i');
      icons.forEach(icon => icon.classList.add('show'));
      observerDiferenciais.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const secaoDiferenciais = document.querySelector('.diferenciais');
if (secaoDiferenciais) {
  observerDiferenciais.observe(secaoDiferenciais);
}

// Animação para imagens da seção Como Funciona
const imagensFunciona = document.querySelectorAll('.como-funciona img');
const observerImagens = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observerImagens.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

imagensFunciona.forEach(img => {
  observerImagens.observe(img);
});