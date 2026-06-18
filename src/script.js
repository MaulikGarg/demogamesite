// ok first select all buttons
const links = document.querySelectorAll('a');

// the element itself
const numberDisplay = document.querySelector('#hover-button-number');

// attach the text changing event listener on all of em
links.forEach(button => {
    button.addEventListener('mouseenter', function () {
        numberDisplay.textContent = button.dataset.number;
    });
    button.addEventListener('mouseleave', function () {
        numberDisplay.textContent = "67";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
})