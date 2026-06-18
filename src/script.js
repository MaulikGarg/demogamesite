// ok first select all buttons
const links = document.querySelectorAll('a');

// the element itself
const numberDisplay = document.querySelector('#hover-button-number');

const hoverSound = new Audio('assets/menu1.wav');

// attach the text changing event listener on all of em
links.forEach(button => {
    button.addEventListener('mouseenter', function () {
        numberDisplay.textContent = button.dataset.number;
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
    button.addEventListener('mouseleave', function () {
        numberDisplay.textContent = "67";
    });
});

window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
})