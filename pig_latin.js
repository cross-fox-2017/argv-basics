'use strict'

function pig_latin (inputKata) {
  let sentenceArr = inputKata.split(' ');
  let holdArr = [];
  let answerStr = '';
  let vowel = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];
  let hasil = []

  if (vowel.indexOf(sentenceArr[0]) >= 0) {
    return sentenceArr;
    }
    else {
        // vowel pertama ada di index berapa
        let cekIndex = '-1'
        for (var i = 0; i < sentenceArr.length; i++) {
          for (var k = 0; k < sentenceArr[i].length; k++) {
            if (vowel.indexOf(sentenceArr[i][k]) >= 0 ){
                // vowel pertama ada di index ke i
                cekIndex = k;
                // potong konsonan di awal
                answerStr = sentenceArr[i].substring(0, k);
                // potong sisa + potongan konsonan + 'ay'
                hasil.push(sentenceArr[i].slice(cekIndex, sentenceArr[i].length) + answerStr + 'ay');
                break;
            }
          }
        }
      }
      return hasil.join(' ')
      }


// Your CLI code here
// process.argv.forEach((inputKata, index) => {
//   console.log(`${index}: ${pig_latin(inputKata)}`);
// });

let argv = process.argv.splice(2).join(' ')
console.log(pig_latin(`${argv}`))
