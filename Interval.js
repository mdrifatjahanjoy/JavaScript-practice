
let count = 1
let intervalID = setInterval(()=>{
    count %= 60;
    console.log((count < 10) ? "0" + count++ : count++) 
},1000)
setTimeout(()=>{
    clearInterval(intervalID)
    console.log("Stopped!!!")
},7000)