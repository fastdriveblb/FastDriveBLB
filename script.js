window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('animate');

    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
});
