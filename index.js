function isPalindrome(word) {
  const arrayOfLetters = word.split('');
  const halfOfArrayIndex = Math.floor(arrayOfLetters.length/2);
  const indexOfLastLetter = arrayOfLetters.length - 1;
  let boolean
  if (arrayOfLetters.length <= 1){
    boolean = true
  } else
  for (let i = 0; i < halfOfArrayIndex; i++){
    if (arrayOfLetters[i] == arrayOfLetters[indexOfLastLetter - i]){
      boolean = true
    } else if (!(arrayOfLetters[i] === arrayOfLetters[indexOfLastLetter - i])){
      boolean = false
      return boolean
    }
  }
  return boolean
}

/* 
  Add your pseudocode here
  -turn word into array of letters
  -find out index of letter that is either half or one
  less than half of word
  -find out if first letter is same as last and so on
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madamimadam"));

  // console.log("Expecting: array of letters");
  // console.log("=>", isPalindrome("hello"))

  // console.log("Expecting: 4");
  // console.log("=>", isPalindrome("hello"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
