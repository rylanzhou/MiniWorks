const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.video-container video');

  const soundButtons = document.querySelectorAll('.sound-picker button');
  const timeButtons = document.querySelectorAll('.time-select button');
  const timeDisplay = document.querySelector('.time-display');

  // Get the length of the time outline
  const outlineLength = outline.getTotalLength();
  // The duration of the song and video
  let duration = 0;

  // Stroke DashArray is to set how long should two dashes reoccour.
  // If it is set to the total length, it's equivalent to the outline itself.
  outline.style.strokeDasharray = outlineLength;
  // Stroke DashOffset is to set the distance between the start point of dash pattern and the very beginning of the line.
  // If offset is equal to dash array value, the line is invisible. Likewise, if offset is 0, it's equivalent to the outline itself.
  outline.style.strokeDashoffset = outlineLength;

  // Create a function specifically to stop and play the sounds
  const checkPlaying = (currentSong) => {
    if (currentSong.paused) {
      currentSong.play();
      video.play();
      play.src = './svg/pause.svg';
    } else {
      currentSong.pause();
      video.pause();
      play.src = './svg/play.svg';
    }
  };

  // Play sound
  play.addEventListener('click', () => {
    checkPlaying(song);
  });

  // Time selection
  timeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      duration = button.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
    });
  });

  // Sound selection
  soundButtons.forEach((button) => {
    button.addEventListener('click', () => {
      song.src = button.getAttribute('data-sound');
      video.src = button.getAttribute('data-video');
      checkPlaying(song);
    });
  });

  // Animate the circle
  song.ontimeupdate = () => {
    // Get the seconds of time that the song has played
    const { currentTime } = song;
    // How much time is left?
    const elapsed = duration - currentTime;
    const seconds = Math.floor(elapsed % 60);
    const minutes = Math.floor(elapsed / 60);

    // Animate the circle
    const progress = outlineLength - (currentTime / duration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= duration) {
      song.pause();
      video.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg';
    }
  };
};

app();
