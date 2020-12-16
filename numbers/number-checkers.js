"use strict";

export function checkIfHappyNumber(number){
  if(typeof number === 'string'){
    number = parseInt(number);
  }

  if (number < 1 || number % 1 != 0){
    return 'Try again with a positive integer.'
  }
  else if (number == 1){
    return 'Well, I suppose 1 is a happy number!'
  }

  let currentNumber = number;
  let seenNumbers = [];
  while (currentNumber > 1){
    if (seenNumbers.includes(currentNumber)){
      return `${number} is not a happy number. One might even say it is a sad number.`
    }
    seenNumbers.push(currentNumber);
    let arrayifiedNumber = currentNumber.toString().split('');
    let squaredDigitSum = 0;
    for (let i = 0; i < arrayifiedNumber.length; i++){
      squaredDigitSum += parseInt(arrayifiedNumber[i])**2
    }
    currentNumber = squaredDigitSum;
  }
  return `${number} is a happy number!
  This is the series of numbers from ${number} to 1:
  ${seenNumbers.join(", ")}, 1`;
}
