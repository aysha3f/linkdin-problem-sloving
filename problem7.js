// Find the Longest Word in a Sentence

function findLongestWord(sentence){
    let words = sentence.split(" ");
    let longest = words[0];
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
};
const result =  findLongestWord("I am solving a JavaScript problem today.");
console.log(result);