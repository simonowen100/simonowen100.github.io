const players = document.querySelectorAll('.player');

players.forEach(player => {
  const btn = player.querySelector('.play');
  const seek = player.querySelector('.seek');
  const audio = player.querySelector('audio');

  // Play / Pause toggle
  btn.addEventListener('click', () => {
    if (audio.paused) {
      // Pause all other players
      players.forEach(p => {
        const a = p.querySelector('audio');
        const b = p.querySelector('.play');
        if (a !== audio) {
          a.pause();
          b.textContent = '▶';
        }
      });

      audio.play();
      btn.textContent = '⏸';
    } else {
      audio.pause();
      btn.textContent = '▶';
    }
  });

  // Update timeline
  audio.addEventListener('timeupdate', () => {
    seek.value = (audio.currentTime / audio.duration) * 100 || 0;
  });

  // Scrub timeline
  seek.addEventListener('input', () => {
    audio.currentTime = (seek.value / 100) * audio.duration;
  });

  // Reset when finished
  audio.addEventListener('ended', () => {
    btn.textContent = '▶';
    seek.value = 0;
  });
});