
// media player. 
// inspiration from this source -> https://www.geeksforgeeks.org/custom-video-player-using-html-css-and-javascript/

const playerContainers = document.querySelectorAll(".audio-video-container");

// loop through the player. 
// Got info on how to do it from this source: https://stackoverflow.com/questions/71743629/html-javascript-custom-player-for-multiple-videos-on-a-website-page
playerContainers.forEach((container) => {

    const player = container.querySelector('.player');
    const playBtn = container.querySelector('.play-pause-btn');
    const backward = container.querySelector('.bwd-btn');
    const forward = container.querySelector('.fwd-btn');
    const audioBtn = container.querySelector('.audio-btn');
    const time = container.querySelector('.duration');

    function togglePlay() {
        if (player.paused) {
            player.play();
            playBtn.innerHTML = 'Pause';
        } else {
            player.pause();
            playBtn.innerHTML = 'Play';
        }
    } 

playBtn.addEventListener('click', togglePlay);


    function goForward() {
        player.currentTime += 10;
    }

forward.addEventListener('click', goForward);

    function rewind() {
        player.currentTime -= 10;
    }
    backward.addEventListener('click', rewind);    

    function toggleAudio() {
        if (player.volume == 0) {
            player.volume = 1;
            audioBtn.innerHTML = 'Mute';
        } else {
            player.volume = 0;
            audioBtn.innerHTML = 'Unmute';
        }
    }

audioBtn.addEventListener('click', toggleAudio);   


    // Referring to source for this timeupdate feature: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
    player.addEventListener('timeupdate', function () {
        const mins = Math.floor(player.currentTime / 60);
        const seconds = Math.floor(player.currentTime - mins * 60);
        const minuteValue = mins.toString().padStart(2, "0");
        const secondValue = seconds.toString().padStart(2, "0");

        const string = `${minuteValue}:${secondValue}`;
        time.textContent = string;
    });
});

// transcripts show/hide, and add/remove aria attributes
const transcripts = document.querySelectorAll('.transcript');
const transcriptToggles = document.querySelectorAll('.transcript-btn');

for (let i = 0; i < transcriptToggles.length; i++) { // loop through them.

    let transcriptToggle = transcriptToggles[i];
    let transcript = transcripts[i];

    transcriptToggle.addEventListener('click', () => {

        transcript.classList.toggle('active');

    if (transcript.classList.contains('active')) {
    
        transcriptToggle.innerHTML = 'Hide Transcript';
        transcript.setAttribute('tabindex', '0'); //the content can be tabbed to when showed
        transcriptToggle.setAttribute('aria-expanded', 'true')
        transcriptToggle.setAttribute('aria-label', 'Showing transcript')    
    } else {
        transcriptToggle.innerHTML = 'Show Transcript';
        transcript.removeAttribute('tabindex', '0');
        transcriptToggle.setAttribute('aria-expanded', 'false')
        transcriptToggle.removeAttribute('aria-label', 'Showing transcript')   
    }
});
}
