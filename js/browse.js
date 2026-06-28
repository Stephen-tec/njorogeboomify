function filterSongs(genre) {
  const songs = document.querySelectorAll('.song-item');

  songs.forEach(song => {
    if (genre === 'all' || song.dataset.genre === genre) {
      song.style.display = 'block';
    } else {
      song.style.display = 'none';
    }
  });
}