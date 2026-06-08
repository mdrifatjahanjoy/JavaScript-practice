// Function calling without argument

function myName(){
    console.log("Md Rifat Jahan Joy")
}

setTimeout(myName,3000)

// Function calling without argument

function myName1(name){
    console.log(name)
}

setTimeout(function(){myName1("Rifat");},1000)
