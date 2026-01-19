
for(c=0; c<100; c++){
    if(c%3==0&&c%5==0) {
       console.log("fizzbuzz") 
    }
    else if (c%3==0){
        console.log("buzz")
    }
    else if (c%5==0) {
        console.log("fizz")
        
    }

    else{
        console.log(c)
    }
}  

function vowel(word){
    let x = word.length
    let count=0;
    let vowel = 'aeouiAEOUI'
    for(let i=0; i<x; i++ ){
      if(vowel.includes(word[i])){
        count++;

      }
    }

  console.log(count)

}

vowel('osman')


console.log("=====================================================================")
function factorial(number){
   let y=1;
    for( let z=number; z>0; z--){
        y=y*z;
       
    }

   console.log(y)
}

factorial(5)

console.log("========================================================================")


function countdown(num){
    for(let w = num; w>=0; w--){
        console.log(w)
    }
}

countdown(9)

console.log("========================================================================")
let r=70;
if(r>50){
    console.log("too hight")
}else if(r<50){
    console.log("too low")
}else{
    console.log("congratulation you gess the number right")
}
console.log("========================================================================")
let sum = 0;
let h =498;
while(h>0){
    let digit = h%10;
    sum = sum + digit;
    h= Math.floor(h/10);
}
console.log(sum)
console.log("========================================================================")
let n = 6;
for(let o=1; o<=10; o++){
  console.log(`${n}X${o} = ${n*o}`)
}

let a = 0;
let b = 1;
for(let f=0; f<10; f++){
    console.log(a)
    let next = a+b;
    a = b;
    b = next;
    
}

