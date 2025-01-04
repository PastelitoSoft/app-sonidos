const numbers = [0, 1, 2, 3];
const btnPlay = document.getElementById('play');
const btnReload = document.getElementById('reload');
const sonido = document.getElementById('sonido');
const visualizer = document.getElementById('audio-visualizer');

btnPlay.addEventListener('click', () => {
    if (numbers.length > 0) {

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers[randomIndex];

        sonido.src = `./res/sound/${selectedNumber}.mp3`;
        sonido.play();

        visualizer.style.visibility = 'visible';
        visualizer.style.animationPlayState = 'running';

        sonido.onended = () => {
            visualizer.style.visibility = 'hidden';
        };

        numbers.splice(randomIndex, 1);

        if (numbers.length === 0) {
            btnPlay.style.pointerEvents = 'none';
            btnPlay.style.opacity = '0.5';
            console.log('Todos los números han sido seleccionados.');
        }
    }
});

btnReload.addEventListener('click', () => {
    if (sonido.src) {
        sonido.play();
        visualizer.style.visibility = 'visible';
        visualizer.style.animationPlayState = 'running';
        sonido.onended = () => {
            visualizer.style.visibility = 'hidden';
        };
    }
});


