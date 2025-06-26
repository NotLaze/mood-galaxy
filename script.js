const modal = document.getElementById('modal');
const moodTitle = document.getElementById('moodTitle');
const moodText = document.getElementById('moodText');
const moodAudio = document.getElementById('moodAudio');
const closeBtn = document.getElementById('close');

const moods = {
  calm: {
    title: "Feeling Calm",
    text: "“Silence is a source of great strength.” – Lao Tzu",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  happy: {
    title: "Feeling Happy",
    text: "“Happiness is not out there, it's in you.” – Unknown",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  sad: {
    title: "Feeling Sad",
    text: "“Tears come from the heart and not from the brain.” – Leonardo da Vinci",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
};

document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    const mood = star.dataset.mood;
    moodTitle.textContent = moods[mood].title;
    moodText.textContent = moods[mood].text;
    moodAudio.src = moods[mood].audio;
    modal.style.display = 'block';
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
  moodAudio.pause();
};
