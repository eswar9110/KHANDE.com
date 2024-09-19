// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

        {songName: "7-Years", filePath: "songs/1.mp3", coverPath: "images/1.png"},
        
        {songName: "ENEMY", filePath: "songs/2.mp3", coverPath: "images/enemy.jpeg"},
        
        {songName: "SKY FALLS", filePath: "songs/3.mp3", coverPath: "images/3.webp"},
        
        {songName: "Arcade", filePath: "songs/4.mp3", coverPath: "https://pagalworlld.com/siteuploads/thumb/sft36/17814_4.jpg"},
        
        {songName: "Big Dawgs", filePath: "songs/5.mp3", coverPath: "images/5.jpg"},
        
        {songName: "Fairy tale", filePath: "songs/6.mp3", coverPath: "images/6.jpg"},
        
        {songName: "Eminem Mocking bird", filePath: "songs/7.mp3", coverPath: "images/Mockingbird_(Eminem_song)_cover.jpg"},
        
        {songName: "ANIMALS MAROON 5", filePath: "songs/8.mp3", coverPath: "images/8.jpg"},
        
        {songName: "Summer times", filePath: "songs/9.mp3", coverPath:"images/summer.jpeg"},
        
        {songName: "Perfect", filePath: "songs/10.mp3", coverPath: "images/10.webp"},
        
        {songName: "", filePath: "songs/10.mp3", coverPath: "images/8.jpg"},
        
        {songName: "", filePath: "songs/10.mp3", coverPath: "images/8.jpg"},
        
        {songName: "", filePath: "songs/10.mp3", coverPath: "images/8.jpg"},
        
        {songName: "", filePath: "songs/10.mp3", coverPath: "images/8.jpg"},
        
        {songName: "", filePath: "songs/10.mp3", coverPath: "images/8.jpg"},
        
];

// Function to play the next song
const playNextSong = () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
        playSong();
    } else {
        songIndex = 0; // Loop back to the first song
        playSong();
    }
};

// Function to play a specific song
const playSong = () => {
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
};

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        playSong();
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to the 'ended' event for playing the next song
audioElement.addEventListener('ended', playNextSong);

// ... (your existing event listeners)

// Function to initialize song items
const initializeSongItems = () => {
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        element.getElementsByClassName("songItemPlay")[0].addEventListener('click', (e) => {
            makeAllPlays();
            songIndex = i;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            playSong();
        });
    });
};

// Function to make all plays inactive
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Initialize song items
initializeSongItems();
