// Find the sum of digits in a given number.
// Example: 738 → 7 + 3 + 8 = 18


let n =738;
sum=0
while(n!=0){
    let y=n%10;
    sum=sum+y;
    n=parseInt(n/10);
}
console.log(sum);


// Find the average of digits in a given number.
// Example: 624 → (6 + 2 + 4) / 3 = 4


let n= 624;
sum=0

while(n!=0){
    let y=n%10;
    sum=sum+y;
     n=parseInt(n/10)
    avg=sum/3
   

}
console.log(avg);


// Find the sum of the first digit and the last digit of a given number.
// Example: 936 → 9 + 6 = 15

let n=936;
   y=n%10
 while(n!=0){
    first_digit=n
    n=parseInt(n/10)

 }
sum=y+first_digit;
console.log(sum)

//  Find the average of digits that are divisible by 5 in a given number.
// Example: 12575 → Divisible by 5 digits: 5, 5, 5 → Average = (5 + 5 + 5) / 3 = 5
let n= 12575;
sum=0
count=0
while(n!=0){
    y=n%10
    if(y%5==0){
        
        sum=sum+y
        count=count+1
        avg=sum/3
    }
    n=parseInt(n/10)
}
avg=sum/count
console.log(avg);


// Find the difference between the largest digit and the smallest digit in a given number.
// Example: 58321 → Largest = 8, Smallest = 1 → Difference = 8 - 1 = 7

// let n=58321;
// max=0;
// min=9;
// while(n!=0){
//     y=n%10;
//     if(y>max){
//     max=y
// }
//    if(y<min){
//     min=y;
//    }
//   n=parseInt(n/10)
// }
// diff=max-min;
// console.log(diff);

