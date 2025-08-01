/*write a function in JavaScript that takes a string and 
returns it reversed.*/

function reverseString (str){
return str.split("").reverse().join("");
 }
 console.log(reverseString("Hello JavaScript!"))