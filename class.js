
function sum(){
   let n = parseInt(document.getElementById("sum1").value);
let sum=0
for(let i=1;i<=n;i++){
  sum=sum+10
    
}
  document.getElementById("sum2").value=sum   

}

// // add 3 number
function addnumber(){
   let n1 = parseInt(document.getElementById("add").value);
let sum=0;
for( let i=1;i<=n1;i++){
    sum=sum+i
}
document.getElementById("add1").value=sum

}

// // multiple table
function table(){
   let n2 = parseInt(document.getElementById("tab").value);
let table =0;
    

for(let i=1;i<=10;i=i+1){
  table= table +n2 +" x "+i+ " = " +n2*i  +"\n"
document.getElementById("tab1").value=table
}
}


// // factorial
// let n=3
//  let fact=1
//  fact = fact*n
//  n=n-1

// let fact=1
// let sum=1
// for(let i=4;i>=1;i--){
//     sum=sum*i
// }
// console.log(sum);
// let fact=1
// for(i=3;i>=1;i--){
//    fact=fact*i
// }
// console.log(fact);


// fibonacci series
//  let a=0;
//  let  b=1;
 
// for( let i=0;i<=7;i=i+1){
//    let c=a+b;

// console.log(c);
// a=b
// b=c
// }
// factorial
function factor(){
    let n4=parseInt(document.getElementById("fact").value);
    let fact=1;
    for(let i=n4;i>=1;i--){
        fact=fact*i
    }
    document.getElementById("fact1").value=fact;
}
// fibanocies
function fibo(){
    let n5=parseInt(document.getElementById("feb").value);
    let n6=parseInt(document.getElementById("feb1").value);
    let result=" ";
    for(let i=1;i<=10;i++){
        let feb=n5+n6
        result=result+feb+"\n"
        n5=n6
        n6=feb
    }
     document.getElementById("feb2").value=result
}
