var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count=1;

setInterval(()=>{
    if (count < 1000) {
        count ++;
        counter.innerHTML=count;
    }
},1);

setTimeout(()=>{
    followers.innerHTML="completed 1000 followers !!!"
},5000)