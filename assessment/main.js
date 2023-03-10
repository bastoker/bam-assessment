import './style.css'

// Resources:
// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// 

const inputText =      
`12345678901234567890123456789012345678901234
--------------------------------------------

Dit is een lang verhaal dat lange zinnen bevat.  Deze passen niet altijd op 1 regel.
Deze moet anders worden geformatteerd. woorden mogen niet worden opgesplitst. Je mag ervan uitgaan dat woorden niet langer zijn dan 44 tekens.


In de input zitten ook newlines. Deze moeten bewaard blijven.
`;

// ASSIGNMENT 1
export const countWords = input => {
  return 0;
}

const MAX_LENGTH = 44;

// OPDRACHT 2
export const textFormatter = input => {
  return input;
 }



// Show output on screen:
let [output] = document.getElementsByClassName("output");
let [wordCount] = document.getElementsByClassName("wordCount");
output.innerHTML = textFormatter(inputText);
wordCount.innerHTML = countWords(inputText);

const exampleOutputText = 
`12345678901234567890123456789012345678901234
--------------------------------------------

Dit is een lang verhaal dat lange zinnen
bevat.  Deze passen niet altijd op 1 regel.
Deze moet anders worden geformatteerd.
woorden mogen niet worden opgesplitst. Je
mag ervan uitgaan dat woorden niet langer
zijn dan 44 tekens.


In de input zitten ook newlines. Deze moeten
bewaard blijven.
`;

// Geef example weer op scherm:
let [example] = document.getElementsByClassName("example");
example.innerHTML = textFormatter(exampleOutputText);