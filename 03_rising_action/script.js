document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');
  const text = title.innerText;
  title.innerHTML = '';
  let index = 0;

  function type() {
    title.innerHTML += text[index];
    index++;
    if (index < text.length) {
      setTimeout(type, 200);
    }
  }

  type();
});

// troubleshoot using chatgpt

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleFadeIn() {
  var paragraphs = document.querySelectorAll('.fade-in');

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];

    if (isElementInViewport(paragraph)) {
      paragraph.classList.add('fade-in-show');
    } else {
      // Only remove the fade-in-show class if the element has already faded in
      if (paragraph.classList.contains('fade-in-show')) {
        paragraph.classList.remove('fade-in-show');
      }
    }
  }

  var para4 = document.querySelector('.para4');
  if (isElementInViewport(para4)) {
    para4.classList.add('fade-in-show');
  } else {
    // Remove the fade-in-show class if para4 is not in the viewport
    para4.classList.remove('fade-in-show');
  }
}

window.addEventListener('scroll', toggleFadeIn);
window.addEventListener('resize', toggleFadeIn);


