const Days = document.querySelector("#days");

const hours = document.querySelector("#hours")

const minutes = document.querySelector("#minutes")

const seconds = document.querySelector("#seconds")



function time ()
{
    
const currentyear = new Date().getFullYear();
const year= new Date(`january 1 ${currentyear+1} 00:00:00`);
let currentdate = new Date()
let diff = year-currentdate

let d = Math.floor((diff/1000/60/60/24));
let h = Math.floor((diff/1000/60/60)%24);
let m = Math.floor((diff/1000/60)%60);
let s = Math.floor((diff/1000)%60);

Days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

}

setInterval (time,1000)
