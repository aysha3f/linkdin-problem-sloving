// Find the Smallest Number in an Array

function smallestNumber(numbers){
    let smallest = numbers[0];
    for(const num of numbers){
        if(num < smallest){
            smallest = num;
        }
    }
    return smallest;
}

const result = smallestNumber([45, 56, 234, 2, 3,4]);
console.log(result);