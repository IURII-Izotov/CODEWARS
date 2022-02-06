/*For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.*/
function validateWord(s) {
    let newArr = s.split('');
    let arr = [];
    for(let i = 0; i<newArr.length;i++){
        for(let j = 0; j<arr.length; j++){
            if(newArr[i] === arr[j]){
                continue
            }
            arr.push(newArr[i]);
        }
    }
    if(arr.length % 2){
        return true
    } else {
        return false
    }
}
validateWord('abcabc')