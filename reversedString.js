/*
Complete the solution so that it reverses the string passed into it.

'world' => 'dlrow'
'word' => 'drow'
*/
function solution(str) {
let strArr=str.split('');
strArr.reverse();
return strArr.join('');
}
solution('world');