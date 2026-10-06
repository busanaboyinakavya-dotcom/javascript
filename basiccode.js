// Write a program to sum of  2 numbers
function add(){
    let n1 = parseInt(document.getElementById("num1").value);
let n2 =parseInt(document.getElementById("num2").value);
let sum = n1+n2;
// console.log(" sum of two numbers :" +sum);
document.getElementById("res").value=sum;
}



//  3 rd find the average of 3  number
 function avg(){
    let n1 = parseInt(document.getElementById("avg1").value);
 let n2=parseInt(document.getElementById("avg2").value);
 let n3 = parseInt(document.getElementById("avg3").value);
let sum = n1 +n2+n3;
let avg = sum/3;
document.getElementById("put").value=avg;
//  console.log(avg)
 }

// 4 missangle angle
function angles(){
    let a1 =parseInt(document.getElementById("ang1").value);
let a2 =parseInt(document.getElementById("ang1").value);
let sum = a1 + a2;
let a3 = 180-sum;
document.getElementById("print").value=a3;
// console.log(a3);
}


//   sum first n natural number
function sum(){
    let n = parseInt(document.getElementById("sum1").value);
    let a = n+1;
    let b = a/2;
    let sum = n*b;
    document.getElementById("out").value=sum;
}


// avg of 1 st n natural number
function number(){
let n= parseInt(document.getElementById("natural1").value);
let sum = n*(n+1)/2;
let avg = sum/n;
document.getElementById("cut").value=avg;
}



// profit percentage
function profit(){
    let cp =  parseInt(document.getElementById("cp").value);
    let sp =  parseInt(document.getElementById("sp").value);
    let profit=sp-cp;
    let profitpercentage =(profit/cp)*100;
    document.getElementById("profit").value=profitpercentage;
}


// simple intrest
function si(){
    let p =parseInt(document.getElementById("p").value);
    let t =parseInt(document.getElementById("t").value);
    let r =parseInt(document.getElementById("r").value);
    let si = (p*t*r)/100;
    document.getElementById("si").value=si;
}



  
