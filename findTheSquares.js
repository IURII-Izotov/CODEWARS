// Problem
// Complete the
// function that takes an odd integer(0 < n < 1000000) which is the difference between two consecutive perfect squares, and
// return these squares as a string in the format "bigger-smaller"

// Examples
// 9-- > "25-16"
// 5-- > "9-4"
// 7-- > "16-9"

const findSquares = num => {
  let n=0;
while (num < 1000000){
  if((((n+1)**2)-(n**2))==num){
    return console.log(`${(n+1)**2}-${n**2}`)
  }
  n++;
}
};
findSquares(37);