// 🎵 เพลง + รูป
const songs = [
  { title: "Song 1", src: "music/song1.mp3", cover: "img/cover1.jpg" },
  { title: "Song 2", src: "music/song2.mp3", cover: "img/cover2.jpg" },
  { title: "Song 3", src: "music/song3.mp3", cover: "img/cover3.jpg" }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// โหลดเพลง
function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  cover.src = songs[i].cover;
}
loadSong(index);

// play / pause
function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

// next
function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

// prev
function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

// auto next
audio.addEventListener("ended", nextSong);

// ===== Drag (mouse + touch) =====
const player = document.getElementById("player");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

player.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - player.offsetLeft;
  offsetY = e.clientY - player.offsetTop;
});

player.addEventListener("touchstart", (e) => {
  isDragging = true;
  const t = e.touches[0];
  offsetX = t.clientX - player.offsetLeft;
  offsetY = t.clientY - player.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  player.style.left = (e.clientX - offsetX) + "px";
  player.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const t = e.touches[0];
  player.style.left = (t.clientX - offsetX) + "px";
  player.style.top = (t.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("touchend", () => isDragging = false);
