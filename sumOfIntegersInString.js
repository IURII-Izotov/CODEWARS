/*
Your task in this kata is to implement a
function that calculates the sum of the integers inside a string.For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
https: //www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
*/
function sumOfIntegersInString(s) {
  let arrStr = s.split('');
  let str='';
  let newArr=[];
  for (let i = 0; i < arrStr.length; i++) {
    if (isNaN(arrStr[i]) == false ) {
      str += arrStr[i];
    }
    if (isNaN(arrStr[i + 1]) == true) {
      newArr.push(str);
      str = '';
    }
  }
  return newArr.reduce((a, b) => Number(a) + Number(b));
}
sumOfIntegersInString("C4t5 are 4m4z1ng.");