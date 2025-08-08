/* Write a JavaScript function that takes an array of numbers and 
returns the largest number in that array. */

function largestNumber (numbers){
    let largest = numbers[0];
    for(const num of numbers){
     if(num > largest){
        largest = num
     }   
     
    }
    return largest; 
}
const findLargestNumber = largestNumber([45,56,234,2,3,4]);
console.log(findLargestNumber);
