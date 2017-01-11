'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
var hasil = [];

process.argv.forEach((val, index) => {
  if (index > 1){
    hasil.push(`${convert(val)}`);
  }
})

console.log(`Kalimat anda dalam bahasa Pig Latin: "${hasil.join(' ')}"`)
