"use strict";

export function listPrimeNumbersInRange(rangeStart, rangeEnd){
  if (rangeEnd === undefined) {
    rangeEnd = rangeStart;
    rangeStart = 2;
  }
  let primeNumberList = [];
  let determinedNotPrime;
  for (let i = rangeStart; i <= rangeEnd; i++){
    determinedNotPrime = false;
    for (let j = 2; j <= i / 2; j++){
      if (i % j === 0){
        determinedNotPrime = true;
        break;
      }
    }
    if (determinedNotPrime === false) {
      primeNumberList.push(i);
    }
  }
  return primeNumberList;
}

export function listPrimeNumbersStartingAtTwo(rangeEnd){
  if (rangeEnd === 2){
    return [2];
  }
  else if (rangeEnd === 3){
    return [2, 3];
  }
  let primeNumberList = [3, 2];
  let indexOfGreatestPrimeLessThanHalf = -1;
  let determinedNotPrime;
  
  for (let i = 5; i <= rangeEnd; i++){
    if (i % 2 === 0){
      continue;
    }
    else if (i % 3 === 0){
      continue;
    }
    else {
      indexOfGreatestPrimeLessThanHalf = primeNumberList.findIndex(number => number < i/2);
      determinedNotPrime = false;

      for (let primeIndex = primeNumberList.length - 3; primeIndex >= indexOfGreatestPrimeLessThanHalf; primeIndex--){ // search using prime numbers smaller than half the current number being checked.
        if (i % primeNumberList[primeIndex] === 0){
          determinedNotPrime = true;
          break;
        }
      }
      if (determinedNotPrime){
        continue;
      }

      for (let j = primeNumberList[indexOfGreatestPrimeLessThanHalf]; j <= i / 2; j++){ // search using numbers past last less-than-half prime checked.
        if (i % j === 0){
          determinedNotPrime = true;
          break;
        }
      }
      if (determinedNotPrime === false) {
        primeNumberList.unshift(i);
      }
    }
  }
  primeNumberList.reverse();
  return primeNumberList;
}
