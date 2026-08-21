export const nowPlayingData = {
  songName: "New Person, Same Old Mistakes",
  author: "Tame Impala",
  // Spotify CDN serves a 332KB full-size JPEG even at the 64px variant URL;
  // self-hosted 112px WebP instead. Re-export from the album page if the song changes
  // (original: https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79)
  cover: "/images/now-playing.webp",
  songUrl: "https://open.spotify.com/track/52ojopYMUzeNcudsoz7O9D",
};
