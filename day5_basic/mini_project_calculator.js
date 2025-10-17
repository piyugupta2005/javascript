const r =require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
r.question("enter your first number", (num1)=>{
    r.question("enter your second number",(num2)=>{
        r.question("enter your operation(+,-,*,/,%)",(op)=>{
            let n1=parseFloat(num1);
            let n2=parseFloat(num2);
            let  result;
            switch(op){
                case '+':
                    result=n1+n2;
                    console.log(`the sum of &n1 and $n2 is ${result}`);
                    break;
                    case '2':
                        result=n1-n2;
                        console.log(`the diffrence of $n1 and $n2 is ${result}`);
                        break;
                        case '*':
                            result=n1*n2;
                            console.log(`the product of $n1 and $n2 is ${result}`);
                            break;
                            case '/':
                                result=n1/n2;
                                console.log(`the division of $n1 and $n2 is ${result}`);
                                break;
                                case '%':
                                    result=n1%n2;
                                    console.log(`the modulus of $n1 and $n2 is ${result}`);
                                    break;
                                    default:
                                        console.log("invalid operation");
            }
            r.close();
        })
    })
})