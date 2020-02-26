const findLongestWord = function(string) {
    let clearString = string //variable to clear and divide spaces beetween words
      .replace(/ {1,}/g, " ") //replace 2 or more spaces into 1
      .trim() //removes whitespace from both ends of a string
      .split(" ");
    let longestWord = clearString[0];
    for (let i = 0; i < clearString.length; i++) {
      if (clearString[i].length > longestWord.length) {
        longestWord = clearString[i];
      }
    }
    return longestWord;
  };
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("Google do a roll"));
  console.log(findLongestWord("May the force be with you"));