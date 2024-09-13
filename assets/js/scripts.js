// script.js
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('audio');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.classList.add('paused');
        } else {
            audio.pause();
            playButton.classList.remove('paused');
        }
    });

    audio.addEventListener('ended', function() {
        playButton.classList.remove('paused');
    });
});
