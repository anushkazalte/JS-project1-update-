function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

if(hours>12){
    hours = hours-12
}


console.log(hours,minutes,seconds);
let hrs = document.getElementById("hrs");
hrs.innerText = hours;

let mins = document.getElementById("mins");
mins.innerText = minutes;

let secs = document.getElementById("secs");
secs.innerText = seconds;
}

setInterval(()=> {
clock()
}, 1000)

let date = new Date();
let hours = date.getHours();

if (hours >= 12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM"
}

else if(hours < 12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}

