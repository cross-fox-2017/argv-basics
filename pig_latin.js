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
function pig_latin(answer){
  let strVowel = ["A","I","U","E","O"];
  let result = "";

  if(strVowel.indexOf(answer[0].toUpperCase()) >= 0 ){
    return answer;
  }else{
    let arrTmp = -1;
    for (let i = 0; i < answer.length; i++){
      if(strVowel.indexOf(answer[i].toUpperCase()) >= 0){
        arrTmp = i;
        result = answer.substring(0,i);
        return answer.slice(arrTmp, answer.length) + result + "ay";
        }
      }
    }
  }

function pig_sentence(answer){
  let arrResult = answer.split(" ");

  if(arrResult.length === 1){
    return pig_latin(answer);
  }else {
    let resultSentence = [];
    for(let i = 0; i < arrResult.length; i++){
      resultSentence.push(pig_latin(arrResult[i]))
    }
    return resultSentence.join(" ");
  }
}

  // console.log(process.argv);
let Parameters = process.argv.splice(2, process.argv.length-2)
console.log(pig_sentence(Parameters.join(' ')));
