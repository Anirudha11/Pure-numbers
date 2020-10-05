// 2) Pure Number
//   Problem:-   Find the first N pure numbers

// Given an integer N, the task is to print first Nth pure numbers. A number is said to be pure if

// 1.	It has an even number of digits.
// 2.	All the digits are either 4 or 5.

// 3.	And the number is a palindrome.

// First few pure numbers are 44, 55, 4444, 4554, 5445, 5555, …

// Examples
// Input: N = 4
// Output: 44 55 4444 5445

// Input: N = 10
// Output: 44 55 4444 4554 5445 5555 444444 454454 544445 554455



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the number ?`, (num) => {

    let arr = printPure(num);

    for(let i=0;i<arr.length;i++){
        console.log(`${arr[i]} `);
    }
    readline.close()
  })
   
  
function printPure(num){
    
  let n  = parseInt(num);
  let pure = []
  let nums = 1;

  while(pure.length != n){
  if(checkPure(nums)){
  pure.push(nums); 
   }
   nums++;
  }
  return pure;
}
  
function checkPure(num) {
    let digits = [];
    let count = 0;

     while(num!=0) {
     let digit = num % 10;
     digits.push(digit);
     num= Math.floor(num/10);
    }

  digits.forEach(element =>{
  if(element == 4 || element == 5){
  count++;
  }
  });
  
  if(digits.length % 2 == 0 && count == digits.length && digits[0] == digits[digits.length-1]){
  return true;
  }else{
  return false;
  }

}