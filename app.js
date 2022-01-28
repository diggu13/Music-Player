const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const songs = ['hey','summer','ukulele']
let songIndex = 0;

loadSong(songs[songIndex]);
// event listener
playBtn.addEventListener('click',toggleAudio);
nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);

// funcitons

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// audio function
function toggleAudio(){
    if(audio.paused){
        playBtn.innerHTML = '<i class="fa fa-pause"</i>'
        musicContainer.classList.add('play')
        audio.play();
    }else{
        audio.pause();
        playBtn.innerHTML='<i class="fa fa-play"></i>'
        musicContainer.classList.remove('play')
    }
    
}

// next song function
function nextSong(){
    songIndex++;
    if(songIndex>songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    toggleAudio();

}

// prevSong
function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex = songs.length -1 ;
    }
    loadSong(songs[songIndex])
    toggleAudio();
}