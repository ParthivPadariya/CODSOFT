var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5500);

let btnMore = document.getElementsByClassName('btnMore')[0];
let more = document.getElementsByClassName('more')[0];
// console.log(btnMore);
btnMore.addEventListener('click', (e) => {
    more.style.display = 'grid'
    btnMore.style.display = "none"
})

// let user = document.getElementsByClassName('name')[0].value;
// let address = document.getElementsByClassName('address')[0].value;
let user = "";
let address = "";
function myFunction(name) {
    user = name;
}

function myFunction2(address) {
    address = address;
}

let btn = document.getElementsByClassName('submit')[0];
btn.addEventListener('click', (e) => {
    user = document.getElementsByClassName('name')[0].value;
    address = document.getElementsByClassName('address')[0].value;
    // console.log(user,address);
    if (user != "" && address != "") {
        alert(`${user} Your Appointment is Booked ${address}`)
        user = "";
        address = "";

    }
    else if (user == "" && address == "") {
        alert("Please Fill All Values")
    }
    else if(user == "" || address == ""){
        alert("Both Field are Required")
    }
})