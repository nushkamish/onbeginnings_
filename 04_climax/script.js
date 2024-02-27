document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const text = title.innerText;
    title.innerHTML = '';
    let index = 0;

    function type() {
        title.innerHTML += text[index];
        index++;
        if (index < text.length) {
            setTimeout(type, 300);
        }
    }

    type();

    // Add blinking animation to the title after 5 seconds
    setTimeout(function() {
        title.classList.add('blink');
    }, 5000); // 5000 milliseconds = 5 seconds

    // Select all elements with the class 'fade-in'
    const elements = document.querySelectorAll('.fade-in');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Check again when the user scrolls
    window.addEventListener('scroll', handleScroll);
});
