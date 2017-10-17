// Put your JavaScript lab code here!

let sentence = "I like JavaScript more than I like to party.";
console.log(sentence);


let only = sentence.slice(28,44);
console.log(only);

let another = "I love Washington State Unviersity";
another = another.replace("Washington State Unviersity", "The University of Washington")
"I love The University of Washington";
let final = sentence.concat(another);
console.log(final);

function sumUpTo(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumUpTo(5))

function vowelCount(str){
    var arr = str.match(/[aeiou]/gi);
    if(arr == null){
        return 0;
    } else {
        return arr.length;
    }
}
