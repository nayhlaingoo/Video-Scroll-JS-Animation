// select video element
var vid = document.getElementById("v0");
// lower number = faster playback
var vidSpeed = 700;

// refresh video frames on interval for smoother playback

function scrollPlay() {
  var frameNumber = window.pageYOffset / vidSpeed;
  console.log(frameNumber);
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
