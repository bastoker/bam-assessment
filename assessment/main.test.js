// @vitest-environment jsdom
import { assert, describe, expect, it, beforeAll} from 'vitest'
import { countWords, textFormatter } from 'main'
import { JSDOM } from "jsdom"


beforeAll(async () => {
    let divExample = document.createElement("div").classList.add('example');
    let divOutput = document.createElement("div").classList.add('output');
    let spanCounter = document.createElement("span").classList.add('counter');
    let content = document.createTextNode("hello");
})

describe('assessment opdrachten', () => {

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
  it('counts simple', () => {
    assert.equal(countWords("aap noot mies"), 3)
    
  })
  it('counts hard', () => {
    assert.equal(countWords(inputText), 50)
    
  })
  

  it('formats', () => {
    expect(textFormatter(inputText)).eq(exampleOutputText)
  })
})
