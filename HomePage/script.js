document.addEventListener("DOMContentLoaded", function() {
    const alvo = document.getElementById('navbar-bottom')
    const alvo_slider = document.getElementById('slide-infinity')
    const classeAplicarSlide = 'navbar-scroll-slide'
    const classeAplicar = 'navbar-scroll'
    const vhNav = 92

    function verifyvh() {
        if (!alvo) {
            return
        }

        const alturaviewport = window.innerHeight
        const gatilho = (alturaviewport * vhNav) /100

        const positionroll = window.scrollY || window.pageYOffset

        if (positionroll >= gatilho) {
            alvo.classList.add(classeAplicar)
            alvo_slider.classList.add(classeAplicarSlide)
        } else {
            alvo.classList.remove(classeAplicar)
            alvo_slider.classList.remove(classeAplicarSlide)
        }
    }

    window.addEventListener('scroll', verifyvh)
    window.addEventListener('resize', verifyvh)
    verifyvh()
})


function setupCarousel(containerId, btnPrevId, btnNextId, itemSelector = '.oferta-item') {
    const container = document.getElementById(containerId);
    const btnPrev = document.getElementById(btnPrevId);
    const btnNext = document.getElementById(btnNextId);

    if (!container || !btnPrev || !btnNext) return;

    const getTamanhoDoPulo = () => {
        const card = container.querySelector(itemSelector);
        if (!card) return 300;
        const gap = parseInt(window.getComputedStyle(container).gap) || 24;
        return card.clientWidth + gap;
    };

    btnPrev.addEventListener('click', () => {
        container.scrollBy({
            left: -getTamanhoDoPulo(),
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', () => {
        container.scrollBy({
            left: getTamanhoDoPulo(),
            behavior: 'smooth'
        });
    });

    const atualizarBotoes = () => {
        btnPrev.classList.toggle('btn-hidden', container.scrollLeft <= 0);

        const limiteScroll = container.scrollWidth - container.clientWidth;
        btnNext.classList.toggle('btn-hidden', container.scrollLeft >= limiteScroll - 1);
    };

    container.addEventListener('scroll', atualizarBotoes);
    window.addEventListener('resize', atualizarBotoes);
    
    atualizarBotoes();
}

setupCarousel('container-scroll-1', 'btn-prev-1', 'btn-next-1');

setupCarousel('container-scroll-2', 'btn-prev-2', 'btn-next-2');

const btnMostrarMais = document.getElementById('btnMostrarMais');
const blocosExtras = document.querySelectorAll('.bloco-extra');
let passoAtual = 0;

btnMostrarMais.addEventListener('click', () => {
    if (passoAtual < blocosExtras.length) {
        const bsCollapse = new bootstrap.Collapse(blocosExtras[passoAtual], {
            toggle: true
        });

        passoAtual++;
    }
});