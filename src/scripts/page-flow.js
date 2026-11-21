const divIntro = document.getElementById('divIntro');
const divGame = document.getElementById('divGame');
const divOutro = document.getElementById('divOutro');
const finishBtn = document.getElementById('next-btn');

const INTRO_DURATION_MS = 6000;

if (divIntro && divGame && divOutro) {
    divIntro.classList.remove('is-hidden');
    divGame.classList.add('is-hidden');
    divOutro.classList.add('is-hidden');

    setTimeout(() => {
        divIntro.classList.add('is-hidden');
        divGame.classList.remove('is-hidden');
    }, INTRO_DURATION_MS);
}

if (finishBtn) {
    finishBtn.addEventListener('click', () => {
        divGame.classList.add('is-hidden');
        divOutro.classList.remove('is-hidden');
    });
}