function playMusic() {
    var audio = [{
        "flowerdance": "./audio/fd.mp3"
    }]

    var randomIndex = Math.floor(Math.random() * audio.length);
    var randomAudio = audio[randomIndex].flowerdance;
    var audio = new Audio(randomAudio);
    audio.play();
}
document.querySelector('.github img').addEventListener('mouseover', function() {
    this.src = './images/github_white.svg';
});

document.querySelector('.github img').addEventListener('mouseout', function() {
    this.src = './images/github.svg';
});