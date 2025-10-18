const r=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let guessno=Math.floor((Math.random()*10+1));
 let count=0;
 function randomnum(){r.question("guess the number",(no)=>{
    let g=parseInt(no);
    if(g<guessno){
        console.log("your number is small guess the correct one");
        count++;
        randomnum();
    }
    else if (g>guessno){
        console.log("your number is large guess the correct one");        
        count++;   
        randomnum();                   
    }
    else{   
        console.log(`congratulations you guessed the correct number ,the guess number is ${guessno} and your count is ${count}`);
        r.close();
    }

})
 }

randomnum();