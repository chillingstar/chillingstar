function playMusic() {
    document.querySelector('#music').style.display = 'none';
    var audio = {
        "flowerdance": "./audio/fd.mp3",
        "rickroll": "./audio/rr.mp3",
        "luvletter": "./audio/ll.mp3",
        "perfectblue": "./audio/pb.mp3",
    };

    var songs = Object.keys(audio);
    var randomSong = songs[Math.floor(Math.random() * songs.length)];
    var audioElement = new Audio(audio[randomSong]);

    audioElement.play();
}

document.querySelector('.github img').addEventListener('mouseover', function() {
    this.src = './images/github_white.svg';
});

document.querySelector('.github img').addEventListener('mouseout', function() {
    this.src = './images/github.svg';
});