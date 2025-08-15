// Count the Vowels in a String

function countVowels (word){
    let count =0;
    for(const letter of word .toLowerCase() ){
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
            count++;
        }
    }
    return count;
}

const findVowels = countVowels('Hello! world');
console.log(findVowels);