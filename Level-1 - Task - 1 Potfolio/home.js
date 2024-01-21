var cards = document.getElementsByClassName('cards');
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
            const yValue = calcValue(1.2 * y, window.innerHeight);
            const xValue = calcValue(1.2 * x, window.innerWidth);
            item.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        })

    }, false);
})

function downloadPDF() {
    const pdfUrl = 'Parthiv_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Parthiv_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', downloadPDF);

consoleText([' World', ' Everyone'], 'text', ['tomato', 'rebeccapurple']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 600)
}