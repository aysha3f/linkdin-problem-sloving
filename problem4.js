// Sum of All Numbers in an Array

function sumNumbers (numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    return sum
}
const findSumNumbers = sumNumbers ([10, 20, 30, 40]);
console.log(findSumNumbers);