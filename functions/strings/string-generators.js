"use strict";

export function reverseString(string){
  return [...string].reverse().join(''); // alternatively: string.split('').reverse().join('');
}

export function capitalizeFirstLetter(string){
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
export function capitalizeFirstLetterOfEachWord(longString){
  //Create an array of strings from the long string, splitting at the spaces (into words):
  let wordArray = longString.split(' ');
  //Capitalize the first letter of each word in the array, then return the modified array:
  let newArray = [];
  for(let i = 0; i < wordArray.length; i++){
    newArray.push(capitalizeFirstLetter(wordArray[i]));
  }
  return newArray.join(' ');
}

//Compress a string of characters
//For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
export function compressString(inputString){
  let compressedString = '';
  let remainingString = inputString;
  while(remainingString){
    let counter = 1;
    let characterToAdd = remainingString[0];
    while(remainingString[0] === remainingString[1]){
      counter++;
      remainingString = remainingString.slice(1);
    }
    remainingString = remainingString.slice(1);
    compressedString += counter + characterToAdd;
  }
  return compressedString;
}

export function getOrdinalSuffixAbbreviation(numberOrNumberString){
  let n;
  if (typeof numberOrNumberString === "string") n = parseInt(numberOrNumberString);
  else n = numberOrNumberString;
  const r = n % 10;
  const s = n % 100;
  if (r === 1 && s !== 11) {
    return "st";
  }
  else if (r === 2 && s !== 12) {
    return "nd";
  }
  else if (r === 3 && s !== 13) {
    return "rd";
  }
  return "th";
}

//Used in Budget Assistant:
export function getOccurrenceString(incomeOrOutgoObject){
  let occurrenceString = `$${incomeOrOutgoObject.dollarsPerOccurrence} `;
  if (!incomeOrOutgoObject.isRecurring) {
    occurrenceString += "just once";
    return occurrenceString;
  }

  switch(incomeOrOutgoObject.weekOfMonthText){
    case "N/A":
      break;
    case "first":
    case "second":
    case "third":
    case "fourth":
    case "last":
      occurrenceString += `the ${incomeOrOutgoObject.weekOfMonthText} ${incomeOrOutgoObject.daysOfWeek[0]} of each month`
      return occurrenceString;
    default:
      break;
  }

  if (incomeOrOutgoObject.referencePeriod === "month"){
    occurrenceString += "on the ";
    if (incomeOrOutgoObject.daysOfMonth.length === 1) {
      const suffix = getOrdinalSuffixAbbreviation(incomeOrOutgoObject.daysOfMonth[0]);
      occurrenceString += `${incomeOrOutgoObject.daysOfMonth[0]}${suffix} `;
    }
    else if (incomeOrOutgoObject.daysOfMonth.length === 2) {
      let suffix0 = getOrdinalSuffixAbbreviation(incomeOrOutgoObject.daysOfMonth[0]);
      let suffix1 = getOrdinalSuffixAbbreviation(incomeOrOutgoObject.daysOfMonth[1]);
      occurrenceString += `${incomeOrOutgoObject.daysOfMonth[0]}${suffix0} and ${incomeOrOutgoObject.daysOfMonth[1]}${suffix1} `;
    }
    else {
      const lastDayIndex = incomeOrOutgoObject.daysOfMonth.length - 1;
      for (let i = 0; i < lastDayIndex; i++) {
        const suffix = getOrdinalSuffixAbbreviation(parseInt(incomeOrOutgoObject.daysOfMonth[i]));
        occurrenceString += `${incomeOrOutgoObject.daysOfMonth[i]}${suffix}, `;
      }
      const suffix = getOrdinalSuffixAbbreviation(incomeOrOutgoObject.daysOfMonth[lastDayIndex]);
      occurrenceString += `and ${incomeOrOutgoObject.daysOfMonth[lastDayIndex]}${suffix} `
    }
    occurrenceString += "of every ";
    if (incomeOrOutgoObject.multiplesOfPeriod === "1") void(0);
    else if (incomeOrOutgoObject.multiplesOfPeriod === "2") occurrenceString += "other ";
    else {
      const suffix = getOrdinalSuffixAbbreviation(parseInt(incomeOrOutgoObject.multiplesOfPeriod));
      occurrenceString += `${incomeOrOutgoObject.multiplesOfPeriod}${suffix} `;
    }
    occurrenceString += "month";
  }
  else {
    if (incomeOrOutgoObject.referencePeriod === "week"){
      occurrenceString += "on ";
      if (incomeOrOutgoObject.daysOfWeek.length === 1) occurrenceString += `${incomeOrOutgoObject.daysOfWeek[0]} `;
      else if (incomeOrOutgoObject.daysOfWeek.length === 2) occurrenceString += `${incomeOrOutgoObject.daysOfWeek[0]} and ${incomeOrOutgoObject.daysOfWeek[1]} `;
      else {
        const lastDayIndex = incomeOrOutgoObject.daysOfWeek.length - 1;
        for (let i = 0; i < lastDayIndex; i++) {
          occurrenceString += `${incomeOrOutgoObject.daysOfWeek[i]}, `;
        }
        occurrenceString += `and ${incomeOrOutgoObject.daysOfWeek[lastDayIndex]} `
      }
    }
    occurrenceString += "every ";
    if (incomeOrOutgoObject.multiplesOfPeriod === "1") occurrenceString += `${incomeOrOutgoObject.referencePeriod}`;
    else if (incomeOrOutgoObject.multiplesOfPeriod === "2") occurrenceString += `other ${incomeOrOutgoObject.referencePeriod}`;
    else occurrenceString += `${incomeOrOutgoObject.multiplesOfPeriod} ${incomeOrOutgoObject.referencePeriod}s`;
  }
  return occurrenceString;
}
