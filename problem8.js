// Problem: Calculate the Factorial of a Number
 
function factorial(num){
    let result = 1;
    for(let i = 1; i<= num; i++){
        result *= i;
    }
    return result
}
console.log(factorial(120));
console.log(factorial(5));