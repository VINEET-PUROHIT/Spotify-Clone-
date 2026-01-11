let createbutton = document.getElementById("CreateButton")
let modelbox = document.getElementById("modelbox")

let create = document.getElementById("create")
let closefile = document.getElementById("close")

let playpausebtn = document.getElementById("playpausebtn");

let progress = document.getElementById("song_progress");

let audio = document.getElementById("audio-player");

let runningTime = document.getElementById("progressedLength");

let totalTime = document.getElementById("totalLength");


createbutton.addEventListener("click", function () {
    modelbox.classList.add("show")
    console.log("class added")

})

create.addEventListener("click", function () {
    modelbox.classList.remove("show")
    console.log("class removed")
})
closefile.addEventListener("click", function () {
    modelbox.classList.remove("show")
    console.log("class removed")
})


let SongData = {
    artists: [
        { name: "Avicii", img: "img/Artists/Avicii.jpg" },
        { name: "Arijit Singh", img: "img/Artists/arijit.jpg" },
        { name: "Martin Garrix", img: "img/Artists/Martin Garrix.jpg" },
        { name: "Mohit Chauhan", img: "img/Artists/Mohit.jpg" },
        { name: "Culture Code", img: "img/Artists/culture code.jpg" },
        { name: "Justin Bieber", img: "img/Artists/Justin bieber.webp" },
        { name: "Tanishk Bakchi", img: "img/Artists/tanishk.jpg" },
        { name: "Vismay Patel", img: "img/Artists/vismay.jpg" },
        { name: "Neffex", img: "img/Artists/neffex.jpg" }
    ],

    liked: [
        { name: "Rabba", img: "img/Rabba.jpg" },
        { name: "Happier Now", img: "img/happier now.jpg" },
        { name: "Khudi", img: "img/khudi.jpg" },
        { name: "Zehen", img: "img/coverart3.jpg" },
        { name: "Levels", img: "img/Levels.jpg" },
        { name: "Next Life", img: "img/Next Life.jpg" },
    ],
    savedAlbum: [
        { name: "Heropanti", img: "img/Rabba.jpg" },
        { name: "Jab We Met", img: "img/tumsehi.jpg" },
        { name: "Aalas Ka Pedh", img: "img/Choo lo.jpg" },
        { name: "Prem Prasang", img: "img/Prem Prasang.jpg" },
        { name: "Stories", img: "img/sunset jesus.jpg" },
        { name: "NCS top 100", img: "img/NCS top 100.jpg" },
        { name: "Aftaab", img: "img/Aftaab.jpg" },
        { name: "True", img: "img/True.jpg" },
        { name: "Yeh Jawaani Hai Deewani", img: "img/YJHD.jpg" },
        { name: "Mai Tera Hero", img: "img/Beshrami ke height.jpg" },
        { name: "Zehen", img: "img/coverart3.jpg" },
    ]


}

// by default artist will be there  

let container = document.getElementById("box-2-container");
const selecteddata = SongData["artists"];

container.innerHTML = selecteddata.map(item => `<div class="subelement">
    <div class ="art" id="artistandtrack">
    <img src="${item.img}" />
     </div>
    <p>${item.name}</p>
    </div>`).join('')


// function to change using clicks

function upadteitemsinbox(type) {

    let container = document.getElementById("box-2-container");
    const selecteddata = SongData[type];

    container.innerHTML = selecteddata.map(item => `
        <div class="subelement">
            <div class="art" id="artistandtrack">
              <img src="${item.img}" />
            </div>
            <p>${item.name}</p>
          </div>`).join('')


}


let songslist = {

    "Vineet Purohit": [
        { title: "When We Feel Young", img: "img/When We Feel Young.jpg", song: "/Songs/When We Feel Young.mp3" },
        { title: "Khayaal", img: "img/coverart3.jpg", song: "/Songs/Khayal.mp3" },
        { title: "Sooraj Duba Hai", img: "img/Suraj Duba hai.jpg", song: "/Songs/Sooraj Dooba Hai.mp3" },
        { title: "Mitva", img: "img/Mitva.jpg", song: "/Songs/Mitwa.mp3" },
        { title: "Tu Mera Hero", img: "img/Tu Mera Hero.jpg", song: "/Songs/Tu Mera Hero.mp3" },
        { title: "Tu Jane Na", img: "img/Tu Jane Na.jpg", song: "/Songs/Tu Jaane Na.mp3" },
        { title: "Kabira", img: "img/YJHD.jpg", song: "/Songs/Kabira.mp3" },
        { title: "The Breakup Song", img: "img/BreakUp Song.jpg", song: "/Songs/The Breakup Song.mp3" },
        { title: "Pal Behta jaaye", img: "img/Pal Behta jaaye.jpg", song: "/Songs/Pal Behta Jaaye.mp3" },
    ],
    SadBois: [
        { title: "Next Life", img: "img/Next Life.jpg" },
        { title: "Bloom", img: "img/Bloom.jpg", song: "/Songs/Bloom.mp3" },
        { title: "Need You Again", img: "img/Need You Again.jpg" },
        { title: "happier Now", img: "img/happier Now.jpg" },
        { title: "Romeo and Juliet", img: "img/Romeo and Juliet.jpg" },
        { title: "Bound To Break", img: "img/Bound To Break.jpg" },
        { title: "Summer Last Year", img: "img/Summer Last Year.jpg" },
        { title: "Hello I Miss You", img: "img/Hello I Miss You.jpg" },
        { title: "Shadows", img: "img/Shadows.jpg" },

    ],
    Bolywood: [
        { title: "BreakUp Song", img: "img/BreakUp Song.jpg" },
        { title: "Beshrami ke height", img: "img/Beshrami ke height.jpg" },
        { title: "Zaalima", img: "img/coverart5.jpg" },
        { title: "Apna Bana Le", img: "img/Apna Bana Le.jpg" },
        { title: "Tere Bina", img: "img/Tere Bina.jpg" },
        { title: "Katiya Karu", img: "img/Katiya Karun.jpg" },
        { title: "Raanjhanaa", img: "img/Raanjhanaa.jpg" },
        { title: "Tu Jane Na", img: "img/Tu Jane Na.jpg" },

    ],
    "Electronic Dance Music": [
        { title: "See The Light", img: "img/See The Light.jpg" },
        { title: "Say My Name", img: "img/Say My Name.jpg" },
        { title: "Stay another Day", img: "img/Stay another Day.jpg" },
        { title: "One More Night", img: "img/One More Night.jpg" },
        { title: "Lost In Your Eyes", img: "img/Lost In Your Eyes.jpg" },
        { title: "Levels", img: "img/Levels.jpg" },
        { title: "Pretend Your'e Mine", img: "img/Pretend Your'e Mine.jpg" },

    ],
    "Indian Rock": [
        { title: "Yellow Paper Diary", img: "img/Yellow Paper Diary.jpg" },
        { title: "Baadal", img: "img/Baadal.jpg" },
        { title: "Choo Lo", img: "img/Choo Lo.jpg" },
        { title: "Khayaal", img: "img/coverart3.jpg" },
        { title: "Pal Behta Jaaye", img: "img/Pal Behta jaaye.jpg" },
        { title: "Aftaab", img: "img/Aftaab.jpg" },
        { title: "Ajnabee", img: "img/Ajnabee.jpg" },

    ]
}




Object.keys(songslist).forEach(category => {

    let box = document.getElementById("songs-box");

    let currentsong = songslist[category];

    if (currentsong.length > 0) {

        const newcontainer = document.createElement("div");
        newcontainer.classList.add("container_middel2")

        newcontainer.innerHTML = `<div class="section-title"><h1>${category}</h1></div>
            <div class="cards">
                ${currentsong.map(track => `
                    <div class="music-card">
                        <div class="sub-card">
                            <img src="${track.img}" />
                            <img src="img/play2.png" id="playbutton" />
                        </div>
                        <div class="p"><h2>${track.title}</h2></div>
                    </div>
                    `).join('')} 
                    </div>`

        box.appendChild(newcontainer);

    }


});

playpausebtn.addEventListener("click", function () {

    if (playpausebtn.classList.contains("play")) {

        playpausebtn.classList.remove("play")
        playpausebtn.classList.add("pause")
        audio.play()
        playpausebtn.src = "img/pause.png"
    }
    else {
        playpausebtn.classList.remove("pause")
        playpausebtn.classList.add("play")
        playpausebtn.src = "img/play.png"
        audio.pause()
    }
})

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration
});

let isDragging = false;

audio.addEventListener("timeupdate", () => {

    if (!isDragging) {
        progress.value = audio.currentTime;
    }

    const totalminutes = Math.floor(audio.duration / 60);
    const totalseconds = Math.floor(audio.duration % 60);

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    console.log(minutes, ":", seconds)

    runningTime.innerText = `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(2, "0")}`;
    totalTime.innerText = `${String(totalminutes).padStart(1, "0")}:${String(totalseconds).padStart(2, "0")}`;
})

progress.addEventListener("input", () => {
    isDragging = true;
});
progress.addEventListener("change", function () {
    const newTime = progress.value;
    audio.currentTime = newTime

    isDragging = false;
})


let volumecontrol = document.getElementById("volume");

volumecontrol.addEventListener("input", function () {
    audio.volume = volumecontrol.value;
})





const songSlider = document.getElementById('song_progress');
const volumeSlider = document.getElementById('volume');


function updateSliderColor(slider) {
 
    const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;


    slider.style.background = `linear-gradient(to right, #1fd660 ${val}%, #4c4d4cff ${val}%)`;
}

songSlider.addEventListener('input', function () {
    updateSliderColor(this);
});


volumeSlider.addEventListener('input', function () {
    updateSliderColor(this);
  
});

updateSliderColor(songSlider);
updateSliderColor(volumeSlider);