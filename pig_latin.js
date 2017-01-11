'use strict'

// let pigLatin = (word) => {
//   let firstLetter = word.charAt(0);
//   if(isPowel(firstLetter)){
//     return word
//   }else{
//     return `${word.substr(1)}${firstLetter}ay`;
//   }
// }

// let isPowel = (char) => {
//   return (/^[aeiou]$/i).test(char);
// }

// let convert = (sentence) => {
//   let result = []
//   let words = sentence.trim().split(/\s+/g)
//   for (let i=0;i<words.length;i++) {
//     result[i] = pigLatin(words[i])
//   }

//   return result.join(" ")
// }
function pig_latin (input){
  var vowel = ['a','i','u','e','o'];
  var temp ;
  var temp2 ;
  if(vowel.indexOf(input[0]) >= 0){ 
    return input;   
  } 
  else {
    var find = false;
    var j = 0;
    while(find == false ){
      if (vowel.includes(input[j]) === false){
        j++;
      }
      else{
        temp = j;
        find = true;
      }
    }
    temp = input.substring(0, j);
    temp2 = input.substring(j, input.length);
    return temp2 + temp + 'ay';
  } 
}


// rl.question('Input your words : ', (answer) => {
//   //console.log(pig_latin(answer));
//   var arrAnswer = answer.split(' ');
//   if(arrAnswer.length == 1){
//     console.log(pig_latin(answer));
//   }
//   else{
//     var tampung =[];
//     for(var i=0; i< arrAnswer.length; i++){
//       tampung.push(pig_latin(arrAnswer[i]));
//     }
//     console.log(tampung.join(' '));
//   }
//   rl.close();
// });

// Your CLI code here
// process.argv.forEach((input, index, array) =>{
//   console.log(`${index}: ${pig_latin(input)}`);
// })
var argv = process.argv.splice(2).join(" ");
console.log(pig_latin(`${argv}`));



