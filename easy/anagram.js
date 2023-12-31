/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let countout = 0;
  let countin = 0;
  let target = str1.length;

  if(str1.length != str2.length){return false}
  
  for(let i = 0; i < str1.length; i++){ // str1 = spar ----- s p a r
    
    countin = 0;
    for(let j = 0; j < str2.length; j++){ // str2 = rasp ----- r    4
      
      if (str2[j].toLowerCase() == str1[i].toLowerCase()) {
        countout++;
        countin++;
        break;
      }
    }
    if(countin == 0){
      return false;
    }
  }

  if (countout == target) {
    return true;
  }

}

module.exports = isAnagram;
