//datatypes in javascript there are two type of datatypes -

//Primitive Datatypes

//1. Number
let num =5.7;
console.log(num);
console.log(typeof(num));

//string
let name="Prerna";
console.log(name);
console.log(typeof(name));

//boolean
let ispresent= true;
console.log(ispresent);
console.log(typeof (ispresent));

//undefined
let employee;
console.log(employee);
console.log(typeof (employee));

//symbol
let a =Symbol("id");
let b=Symbol("id");
console.log(a==b);
console.log(typeof(a));

//null
let c=null;
console.log(c);
console.log(typeof c); // it is object

//bigInt
let d= 34567899008865442223456672334456678899876532234567889999999987775555n;
console.log(d);
console.log(typeof d);

//non-primitive datatypes-
 
//array-
let arr=[5,"yesh",true,null]
console.log(arr);
console.log(typeof arr);

//function

function sum(){
  console.log(3+6);  
}
sum();
console.log(typeof sum);

 let n=function sum(){
  console.log(3+6);  
}
console.log(typeof sum);
console.log(typeof n());

let detials={
    name:"prerna",
    age:29,
    location:"mumbai"
}
console.log( detials);
console.log(typeof detials );

//  the concept of immutable and mutable- All the Primitive datatypes are immutable (it not change its value it change the position of the variablename the variable name left the box of first value and it assign the second value) It store the value.
//  all the Non-Primitive value are mutable it can change its value it store the address of the value.