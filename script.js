window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('animate__animated', 'animate__fadeInUp');

    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.classList.add('animate__animated', 'animate__fadeInUp');
    });
});
