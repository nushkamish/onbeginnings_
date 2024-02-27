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
// troubleshoot using chatgpt

document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing');
    const text = typingText.innerText;
    typingText.innerHTML = '';

   
    setTimeout(function() {
        let index = 0;
        function type() {
            typingText.innerHTML += text[index];
            index++;
            if (index < text.length) {
                setTimeout(type, 100); 
            }
        }
        type();
    }, 10000); 
});

document.addEventListener('DOMContentLoaded', function() {
    const e = document.querySelector('.e');
    const e1 = document.querySelector('.e1');

    e.addEventListener('mouseover', function() {
        e1.style.opacity = 1;
    });

    e.addEventListener('mouseout', function() {
        e1.style.opacity = 0;
    });
});

