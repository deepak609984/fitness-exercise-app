const video = document.getElementById('camera');
const exerciseVideo = document.getElementById("exerciseVideo");
const playButton = document.getElementById("playVideo");
const captureButton = document.getElementById("capture");
const photoElement = document.getElementById("photo");

// Webcam Access
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => { video.srcObject = stream; });

// Capture Image From Webcam
captureButton.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    photoElement.src = canvas.toDataURL("image/png");
});

// Play Workout Video
playButton.addEventListener("click", () => {
    exerciseVideo.play();
});