


let music_obj = [
    {
        path: "assets/1.mp3",
        name: "khoya khoya",
        cover: "img/1.jpg",
        artist: "sooraj panchali"

    },

    {
        path: "assets/2.mp3",
        name: "khali sala duva",
        cover: "img/2.jpg",
        artist: "mayabhai ayar"

    },

    {
        path: "assets/3.mp3",
        name: "love me like you do",
        cover: "img/3.jpg",
        artist: "narendra modi"

    },
]

let play_btn = document.getElementById("play");
let next_btn = document.getElementById("next");
let previous_btn = document.getElementById("prev")
let fa_play = document.getElementsByClassName("fa-play")
let bg_img = document.getElementById("bg-img");
let bg_cover = document.getElementById("cover");
let music_title = document.getElementById('music-title');
let music_artist = document.getElementById('music-artist');
// let progress_bar = document.getElementById("player-progress");
// let progress = document.getElementById("progress");




let play_music = () => {
    let i = 0;
    let music = new Audio(music_obj[i].path);
    const progressBar = document.getElementById('player-progress');
    const progress = document.getElementById('progress');
    music.play
    document.addEventListener('DOMContentLoaded', function () {

        const progressBar = document.getElementById('player-progress');
        const progress = document.getElementById('progress');
        console.log(progressBar)
        music.addEventListener('timeupdate', function () {
            const duration = music.duration;
            const currentTime = music.currentTime;
            const progressPercent = (currentTime / duration) * 100;
            progress.style.width = progressPercent + '%';
        });

        // Optional: Click to seek
        progressBar.addEventListener('click', function (e) {
            const rect = progressBar.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newTime = (offsetX / progressBar.offsetWidth) * music.duration;
            music.currentTime = newTime;
        });

        console.log(progress)
    });
    play_btn.onclick = () => {

        if (play_btn.classList.contains("fa-play")) {
            play_btn.classList.replace('fa-play', "fa-pause")
            music.play();
            console.log(i)
            bg_cover.setAttribute("src", music_obj[i].cover)
            bg_img.setAttribute("src", music_obj[i].cover)
            music_artist.innerText = music_obj[i].artist
            music_title.innerText = music_obj[i].name;

            


        } else {
            play_btn.classList.replace('fa-pause', 'fa-play')
            // i = false
            music.pause()
        }

        next_btn.onclick = () => {
            music.pause()
            i += 1;
            console.log(i)
            // music.play();
            // console.log(bg_cover)
            bg_cover.setAttribute("src", music_obj[i].cover)
            bg_img.src = music_obj[i].cover
            music_artist.innerText = music_obj[i].artist
            music_title.innerText = music_obj[i].name


            
            // console.log(bg_img.src= music_obj[i].cover)
            console.log(document.getElementById("bg-img").src = music_obj[i].cover)
            music = new Audio(music_obj[i].path);

            music.play();
        }

        previous_btn.onclick = () => {
            music.pause()
            i -= 1;
            console.log(i)
            // music.play();
            // console.log(bg_cover)
            bg_cover.setAttribute("src", music_obj[i].cover)
            bg_img.src = music_obj[i].cover
            music_artist.innerText = music_obj[i].artist
            music_title.innerText = music_obj[i].name

            // console.log(bg_img.src= music_obj[i].cover)
            console.log(document.getElementById("bg-img").src = music_obj[i].cover)
            music = new Audio(music_obj[i].path);

            music.play();
        }
    }


}

play_music();