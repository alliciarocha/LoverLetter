document.addEventListener('DOMContentLoaded', () => {
    const bgHearts = document.querySelector('.bg-hearts');
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = '❤';
        
        // Randomize position and animation
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        
        bgHearts.appendChild(heart);
    }

    // Clique para manter aberto e trazer envelope para frente
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });
});
