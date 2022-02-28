const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    const randomColor = colors[randomNumber];

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = randomColor;
    // color.style.backgroundColor = randomColor;
    // color.style.color = getTextColor(randomColor);
    })

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}