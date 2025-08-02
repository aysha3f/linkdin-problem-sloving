/* write a function that tells whether a number
 is even or odd */

 function isEvenOrOdd (numbers){
 let results = [];

 for(let i = 0; i < numbers.length; i++){
    let num = numbers [i];

    if (num % 2 ===0){
        results.push(num + " is even");
    }
    else{
        results.push(num + " is odd");
    }
 }
 return results;
 }
  
 const finalResult = isEvenOrOdd([5, 45, 6, 20])
 console.log(finalResult)