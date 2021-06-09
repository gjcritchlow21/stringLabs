//string
let sentence = "Where in the world is Carmen San Diego?";

//part of string to look for
let word = "Carmen";

//printing to the console
console.log(sentence.includes("world")); //true
console.log(sentence.includes("fox")); // false

//ternary to announce if word is in sentence or not
console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
