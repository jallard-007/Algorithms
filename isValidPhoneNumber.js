function telephoneCheck(str) {
  if (str.length < 10){
    return false;
  }

  let numCount = 0;
  for (let i = 0; i < str.length; i++){
    if(isNumeric(str[i])){
      numCount++;
      continue;
    }
    if (isValidChar(str[i])){
      const Next3Nums = nextThreeCharsAreNumbers(str, i)
      if (str[i] == " " || (str[i] == "-" && Next3Nums) 
      || (str[i] == "(" && str[i + 4] == ")" && Next3Nums) 
      || (str[i] == ")" && str[i-4] == "(")){
        continue;
      }
    }
    return false;
  }
  if (numCount > 11 || numCount == 11 && str[0] != 1){
    return false;
  }
  return true;
}

function isNumeric (char){
  if (char >= 0 && char <= 9 && char != " "){
    return true;
  }
  return false;
}

function isValidChar(char){
  if (char != "(" && char != ")" && char != "-" && char != " "){
    return false;
  }
  return true;
}

function nextThreeCharsAreNumbers(str, i){
  if (!isNumeric(str[i+1]) || !isNumeric(str[i+2]) || !isNumeric(str[i+3])){
    return false;
  }
  return true;
}

telephoneCheck("1 (555) 555-5555");