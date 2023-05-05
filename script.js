const audio = document.querySelector('audio');
const volumeSlider = document.getElementById("volumeSlider");
const speedSlider = document.getElementById("speedSlider");
const resetButton = document.getElementById("resetButton");
const fileInput = document.getElementById("fileInput");

// Add event listeners to the sliders
volumeSlider.addEventListener("input", updateVolume);
speedSlider.addEventListener("input", updateSpeed);

// Add event listener to the reset button
resetButton.addEventListener("click", resetSliders);

// Add event listener to the file input
fileInput.addEventListener("change", loadAudioFile);

function updateVolume() {
  audio.volume = volumeSlider.value / 100;
}

function updateSpeed() {
  audio.playbackRate = speedSlider.value;
}

function resetSliders() {
  volumeSlider.value = 50;
  speedSlider.value = 1;
  audio.volume = 0.5;
  audio.playbackRate = 1;
}

function loadAudioFile(event) {
  const file = event.target.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function() {
    audio.src = fileReader.result;
  };

  if (file) {
    fileReader.readAsDataURL(file);
  }
}
