window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '1'; // Show container immediately

    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, 300 * (index + 1));
    });
});
