"use strict"

//use readline to fix this challenge
const readline = require('readline');

function toPigLatin(word) {
  var kata = word.split('')
  var pig = 'ay'
  var temp = ''
  var vowel = ['a','i','u','e','o']
    if (vowel.indexOf(kata[0])!=-1) {
      return word
    }else {
      temp = word.slice(1, kata.length)
      return temp + (word.slice(0,1) + pig)
    }
}

function newPigLatin(sentence) {
  var arr = sentence.split(' ')
  var res = ''
  for (var i = 0; i < arr.length; i++) {
    res += toPigLatin(arr[i]) + ' '
  }
  return res
}
// console.log(toPigLatin('Hello'));

process.argv.forEach((val)=> {
  console.log(`${newPigLatin(val)}`);
})
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// rl.setPrompt('Input Word / Sentence: ')
//
// rl.prompt()
//
// rl.on('line', (line) => {
//   console.log(newPigLatin(line));
//   rl.prompt()
// }).on('close',()=> {
//   process.exit(0)
// })
