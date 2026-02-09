const buttons = document.querySelectorAll('button[data-target]');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const rect = btn.getBoundingClientRect();
    for(let i=0;i<5;i++){
      const smoke = document.createElement('div');
      smoke.classList.add('smoke-effect');
      smoke.style.left = `${rect.left + rect.width/2}px`;
      smoke.style.top = `${rect.top + rect.height/2}px`;
      document.body.appendChild(smoke);
      setTimeout(() => smoke.remove(), 800);
    }
    setTimeout(() => {
      window.location.href = btn.dataset.target;
    }, 300);
  });
});

