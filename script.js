const btn = document.getElementById('magicBtn');
btn.addEventListener('click', () => {
  btn.textContent = '✨ Magic! ✨';
  setTimeout(() => btn.textContent = 'Click Me!', 1000);
});
