/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let str2 = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] == ' ' || str[i] == ',' || str[i] == '?' || str[i] == '!'|| str[i] == '.')
    {
      continue;
    }
    else{
      str2 += str[i].toLowerCase()
    }
  }
  let temp = "";
  for( let i = str2.length - 1; i >=0; i-- )
  {
    if(str2[i] == ' ' || str2[i] == ',' || str2[i] == '?' || str2[i] == '!' || str2[i] == '.')
    {
      continue;
    }
    else{
      temp += str2[i].toLowerCase();
    }
  }

  if(str2 == temp)
  {
    return true;
  }
  else{return false;}

}

module.exports = isPalindrome;
