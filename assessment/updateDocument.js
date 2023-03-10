import { countWords, textFormatter } from "./main";
import './style.css'

const inputText =      
`12345678901234567890123456789012345678901234
--------------------------------------------

Dit is een lang verhaal dat lange zinnen bevat.  Deze passen niet altijd op 1 regel.
Deze moet anders worden geformatteerd. woorden mogen niet worden opgesplitst. Je mag ervan uitgaan dat woorden niet langer zijn dan 44 tekens.


In de input zitten ook newlines. Deze moeten bewaard blijven.
`;

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

// Show output on screen:
let [output] = document.getElementsByClassName("output");
let [wordCount] = document.getElementsByClassName("wordCount");
output.innerHTML = textFormatter(inputText);
wordCount.innerHTML = countWords(inputText);



// Geef example weer op scherm:
let [example] = document.getElementsByClassName("example");
example.innerHTML = textFormatter(exampleOutputText);


