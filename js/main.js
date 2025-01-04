const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const btnPlay = document.getElementById('play');
const btnReload = document.getElementById('reload');
const sonido = document.getElementById('sonido');
const visualizer = document.getElementById('audio-visualizer');
const inicio = document.getElementById('inicio');
const imgPlay = document.getElementById('img-play');


btnPlay.addEventListener('click', () => {
    if (numbers.length > 0) {
        inicio.style.display = 'none';
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const selectedNumber = numbers[randomIndex];

        sonido.src = `./res/sound/${selectedNumber}.mp3`;
        sonido.play();

        btnPlay.style.pointerEvents = 'none';
        btnPlay.style.opacity = '0.5';

        visualizer.style.visibility = 'visible';
        visualizer.style.animationPlayState = 'running';

        sonido.onended = () => {
            visualizer.style.visibility = 'hidden';
            visualizer.style.animationPlayState = 'paused';

            btnPlay.style.pointerEvents = 'auto';
            btnPlay.style.opacity = '1';

        };

        numbers.splice(randomIndex, 1);

        if (numbers.length === 0) {
            imgPlay.style.display = 'none';
            btnPlay.style.backgroundColor = '#FAFAD2';
            btnPlay.innerText = 'Reiniciar';
            btnPlay.addEventListener('click', () => {
                location.reload();
            });
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


