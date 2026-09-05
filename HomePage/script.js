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


const container = document.getElementById('container-scroll');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

function scrollL() {

    const card = container.querySelector('.oferta-item');
    const tamanhoDoPulo = card.clientWidth + 24;

    container.scrollBy({
        left: -tamanhoDoPulo,
        behavior: 'smooth'
    });
}

function scrollR() {
    const card = container.querySelector('.oferta-item');
    const tamanhoDoPulo = card.clientWidth + 24; 

    container.scrollBy({
        left: tamanhoDoPulo,
        behavior: 'smooth'
    });
}

function atualizarBotoes() {
    if (container.scrollLeft <= 0) {
        btnPrev.classList.add('btn-hidden');
    } else {
        btnPrev.classList.remove('btn-hidden');
    }

    const limiteScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= limiteScroll - 1) {
        btnNext.classList.add('btn-hidden');
    } else {
        btnNext.classList.remove('btn-hidden');
    }
}

container.addEventListener('scroll', atualizarBotoes);
window.addEventListener('resize', atualizarBotoes);

atualizarBotoes();