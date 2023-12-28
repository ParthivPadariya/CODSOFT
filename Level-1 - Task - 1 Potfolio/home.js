var  cards = document.getElementsByClassName('cards');
// console.log(cards);

const range = 40;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1)

let timeout;

const arr = Array.from(cards)
arr.forEach((item) => {
    item.addEventListener('mousemove', ({ x, y }) => {
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(() => {
            const yValue = calcValue(1.2*y, window.innerHeight);
            const xValue = calcValue(1.2*x, window.innerWidth);
            item.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        })
    
    }, false);
})
