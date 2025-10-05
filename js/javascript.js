window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    const cabecalho = document.getElementById('cabecalho');
    
    const limite = cabecalho.offsetHeight; // altura do cabeçalho

    if (window.scrollY > limite) {
        menu.classList.add('fixo');
    } else {
        menu.classList.remove('fixo');
    }
});

const outro = document.getElementById('outro');
const campoOutro = document.getElementById('outra_ocupacao');

outro.addEventListener('change', function() {
  campoOutro.disabled = !outro.checked;
});