/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
https: //www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
*/
function smash(words) {
  if(words.length == 0){
  return ''
  }
  if (words.length == 1) {
  return words[0]
  }
  let str= `${words[0]} `
  for(let i=1; i<words.length-1;i++){
    str += `${words[i]} `
  }
  str += `${words[words.length-1]}`

  return str
};
smash(["hello", "amazing", "world"]);