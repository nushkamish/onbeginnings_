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
});
