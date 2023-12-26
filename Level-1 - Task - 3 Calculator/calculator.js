let input = document.getElementById('input')

let button = document.querySelectorAll('button');
// console.log(button);

let display = ""
let arr = Array.from(button);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let v = e.target.innerHTML;
        if (v == "=") {
            display = eval(display)
        }
        else if(v == "AC"){
            display = ""
        }
        else if(v == "DEL"){
            if (display.length > 0) {
                let n = display.length-1
                display = display.substring(0,n);
                // console.log(display);
            }
        }
        else{
            display = display +  v;
        }
        input.value = display
    })
})