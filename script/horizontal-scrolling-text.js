document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.querySelector('.scrolling-text');
    let speed = 15; 

    function scrollText() {
        const containerWidth = document.querySelector('.scrolling-text-container').offsetWidth;
        const textWidth = scrollingText.offsetWidth;

        scrollingText.style.transform = `translateX(${containerWidth}px)`;

        scrollingText.animate([
            { transform: `translateX(${containerWidth}px)` },
            { transform: `translateX(-${textWidth}px)` }
        ], {
            duration: (containerWidth + textWidth) * speed,
            iterations: Infinity
        });
    }

    scrollText();
});