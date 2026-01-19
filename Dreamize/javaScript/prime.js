const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("enter a number ",input=>{
    let num = Number(input);
    
    let isprime = true;
    for(let i =2; i<num; i++){
        if(num%i===0){
            isprime = false;
            break;
        }
    }
    if(isprime){
        console.log(" prime")
    }else{
        console.log(" not prime")
    }

    
   rl.close();
});



