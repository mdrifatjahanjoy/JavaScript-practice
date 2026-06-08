let id = setInterval(()=>{
    if(count === 0){
        console.log("Happy Birthday To You....");
        clearInterval(id)
    }
    if(count > 0)
    console.log(count--)
},1000)

let count = 10;