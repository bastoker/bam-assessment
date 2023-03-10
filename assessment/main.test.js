// @vitest-environment jsdom
import { assert, describe, expect, it, beforeAll} from 'vitest'
import { countWords } from 'main'
import { JSDOM } from "jsdom"


beforeAll(async () => {
    const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
    let divExample = document.createElement("div").classList.add('example');
    let divOutput = document.createElement("div").classList.add('output');
    let spanCounter = document.createElement("span").classList.add('counter');
    let content = document.createTextNode("hello");
})

describe('assessment opdrachten', () => {


  it('counts', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('formats', () => {
    expect(1 + 1).eq(2)
  })
})
