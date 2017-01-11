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

// Your CLI code here
let hasil = process.argv.splice(2).join(' ')
console.log(sentences(`${hasil}`)); 

  // TODO: Log the answer in a database
  function sentences(input){
  var kalimat = input.split(" ");
  var hasil   = "";
  if(kalimat.length > 1){
    for(var i = 0; i < kalimat.length; i++){
      hasil = hasil + pigLatin(kalimat[i]) + " "
    }
  } else{
      return pigLatin(input);
  }
  return hasil
}
  function pigLatin(words){
  var result = [];
  var vowel  = words.toString().split("");
  var word   = vowel.join("");

  if(words[0] == "a" || words[0] == "i" || words[0] == "u" || words[0] == "e" || words[0] == "o"){

  return words;
  } else{
    for(var i = 0; i < vowel.length; i++){
     if(vowel[i] == "a" || vowel[i] == "i" || vowel[i] == "u" || vowel[i] == "e" || vowel[i] == "o"){
      result.push(words.substr(i));
      result.push(words.substr(0,i));
      result.push("ay");

       return result.join("");
     }
    }
  }
}
