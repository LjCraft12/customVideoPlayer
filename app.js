const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timeStamp');

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
    return true
};

// Set progress bar to video time
const setVideoProgress = () => {
    return true
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
video.addEventListener('timeUpdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);