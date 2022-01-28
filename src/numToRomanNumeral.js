const numberToBeConverted = 16;

function convertToRoman(num) {
  let romanStr = '';
  const arr = [1, 5, 10, 50, 100, 500, 1000];
  for (let x = arr.length; x >= 0; x--) {
    let div = num / arr[x];
    if (div >= 1 && div < 4) {
      romanStr += romanMap[arr[x]].repeat(Math.floor(div));
      num -= Math.floor(div) * arr[x];
    }
    div = num / arr[x];
    if (div >= 0.8 && div < 1) {
      if (
        div >= 0.9 &&
        (arr[x - 2] == 1 || arr[x - 2] == 10 || arr[x - 2] == 100)
      ) {
        romanStr += romanMap[arr[x - 2]] + romanMap[arr[x]];
        num -= arr[x] - arr[x - 2];
      }
      if (
        div >= 0.8 &&
        (arr[x - 1] == 1 || arr[x - 1] == 10 || arr[x - 1] == 100)
      ) {
        romanStr += romanMap[arr[x - 1]] + romanMap[arr[x]];
        num -= arr[x] - arr[x - 1];
      }
    }
  }
  return romanStr;
}

const romanMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

console.log(convertToRoman(numberToBeConverted));
