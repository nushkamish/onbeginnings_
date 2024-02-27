window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var threshold = 500; // Adjust as needed
    
    if (scrollPosition > threshold) {
      document.body.classList.add('bg-color-2');
      document.body.classList.remove('bg-color-1');
    } else {
      document.body.classList.add('bg-color-1');
      document.body.classList.remove('bg-color-2');
    }
  });

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

  

document.addEventListener('DOMContentLoaded', function() {
    const e2 = document.querySelector('.para4 .e2');
    const e3 = document.querySelector('.para4 .e3');

    e2.addEventListener('mouseover', function() {
        e3.style.opacity = 1;
    });

    e2.addEventListener('mouseout', function() {
        e3.style.opacity = 0;
    });
});

