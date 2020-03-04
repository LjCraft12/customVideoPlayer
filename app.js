const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Toggle video play and pause
const toggleVideoStatus = () => {
    if (video.paused) video.play();
    else video.pause()
};

// Change play icon based on video status
const updatePlayIcon = () => {
    if (video.paused) playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    else playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
};

// Update progress bar and timestamp
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;

    // Update timestamp
    // Get minutes of video
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) mins = '0' + String(mins);

    // Get seconds of video
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10) seconds = '0' + String(seconds);

    timestamp.innerHTML = `${mins}: ${seconds}`
};

// Set progress bar to video time
const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100
};

// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause()
};

// Add event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);