'use strict'

// let pigLatin = (word) => {
//   let firstLetter = word.charAt(0);
//   if(isPowel(firstLetter)){
//     return word
//   }else{
//     return `${word.substr(1)}${firstLetter}ay`;
//   }
// }
//
// let isPowel = (char) => {
//   return (/^[aeiou]$/i).test(char);
// }
//
// let convert = (sentence) => {
//   let result = []
//   let words = sentence.trim().split(/\s+/g)
//   for (let i=0;i<words.length;i++) {
//     result[i] = pigLatin(words[i])
//   }
//
//   return result.join(" ")
// }

function pigLatinprocess(words){

  if(/[aiueo]/i.test(words[0]) === true){
    return words;
  }
  else {
    var consonant = /[^aiueo]+/i.test(words);
    var get_consonant = RegExp.lastMatch;
    var pig_latin_word = words.replace(get_consonant,"") + get_consonant + "ay";
    return pig_latin_word;
  }
}


function pigLatin(words){
  var arr_words = words.split(" ");
//
  if(arr_words.length === 1){
   return pigLatinprocess(words)
  }
  else{
    words = [];
    for(var i=0; i<arr_words.length; i++){
      words.push(pigLatinprocess(arr_words[i]));
    }
    return words.join(" ")
  }
}
var edited_string = pigLatin(process.argv.splice(2).join(" "))

console.log(edited_string)

// console.log(full_string)
// Your CLI code here
