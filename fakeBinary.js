/*
Given a string of digits, you should replace any digit below 5 with '0'
and any digit 5 and above with '1'.Return the resulting string.

Note: input will never be an empty string
https: //www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
*/
function fakeBin(x) {
let arrNum=x.split('');
console.log(arrNum)
for(let i=0; i<arrNum.length; i++){
if(+arrNum[i]< 5){
  arrNum[i]=0;
} else if (+arrNum[i]>= 5){
  arrNum[i] = 1;
}
}
return arrNum.join('');
}
fakeBin('45385593107843568');