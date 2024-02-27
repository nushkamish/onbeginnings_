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

    // Add blinking animation after 5 seconds
    setTimeout(function() {
        goodbye.classList.add('blink');
    }, 5000); // 5000 milliseconds = 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const opening = document.querySelector('.opening');
    const para1 = document.querySelector('.para1');

    opening.addEventListener('mouseover', function() {
        para1.style.opacity = '1';
    });

    opening.addEventListener('mouseout', function() {
        para1.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const para2 = document.querySelector('.para2');
    const para3 = document.querySelector('.para3');

    para2.addEventListener('mouseover', function() {
        para3.style.opacity = '1';
    });

    para2.addEventListener('mouseout', function() {
        para3.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const para4 = document.querySelector('.para4');
    const para5 = document.querySelector('.para5');

    para4.addEventListener('mouseover', function() {
        para5.style.opacity = '1';
    });

    para4.addEventListener('mouseout', function() {
        para5.style.opacity = '0';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const para6 = document.querySelector('.para6');
    const para7 = document.querySelector('.para7');

    para6.addEventListener('mouseover', function() {
        para7.style.opacity = '1';
    });

    para6.addEventListener('mouseout', function() {
        para7.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const question = document.querySelector('.question');
    const answer = document.querySelector('.answer');

    question.addEventListener('mouseover', function() {
        answer.style.opacity = '1';
    });

    question.addEventListener('mouseout', function() {
        answer.style.opacity = '0';
    });
});



