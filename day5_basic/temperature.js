const r= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
r.question("enter temperature in celsius: ", (celsius)=>{
    let c=parseFloat(celsius);
    let fahrenheit=(c*9/5)+32;
    console.log(`${c} degree celsius is equal to ${fahrenheit} degree fahrenheit`);
    r.close();
})