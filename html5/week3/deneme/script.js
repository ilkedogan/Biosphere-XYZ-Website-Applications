document .querySelector(".playPauseBtn") .addEventListener("click", toggleVideo);
   var video = document.querySelector(".backgroundVideo");
   var btn = document.querySelector(".playPauseBtn");
   function toggleVideo() {
      if (video.paused) {
         video.play();
         btn.innerHTML = "Pause";
      }
      else {
         video.pause();
         btn.innerHTML = "Play";
      }
   }