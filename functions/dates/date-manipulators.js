"use strict";

export function setDateToMidday(milliseconds){
  let newDate = new Date(milliseconds);
  newDate.setHours(12, 0, 0, 0);
  return newDate;
}

export function convertDaysOfWeek(daysOfWeek){
  const convertedDaysOfWeek = [];
  if (typeof daysOfWeek[0] === "number"){
    for (let i = 0; i < daysOfWeek.length; i++){
      switch(daysOfWeek[i]){
        case 0:
          convertedDaysOfWeek.push("Sunday"); break;
        case 1:
          convertedDaysOfWeek.push("Monday"); break;
        case 2:
          convertedDaysOfWeek.push("Tuesday"); break;
        case 3:
          convertedDaysOfWeek.push("Wednesday"); break;
        case 4:
          convertedDaysOfWeek.push("Thursday"); break;
        case 5:
          convertedDaysOfWeek.push("Friday"); break;
        case 6:
          convertedDaysOfWeek.push("Saturday"); break;
        default:
          return undefined;
      }
    }
  }
  else {
    for (let i = 0; i < daysOfWeek.length; i++){
      switch(daysOfWeek[i]){
        case "Sunday":
          convertedDaysOfWeek.push(0); break;
        case "Monday":
          convertedDaysOfWeek.push(1); break;
        case "Tuesday":
          convertedDaysOfWeek.push(2); break;
        case "Wednesday":
          convertedDaysOfWeek.push(3); break;
        case "Thursday":
          convertedDaysOfWeek.push(4); break;
        case "Friday":
          convertedDaysOfWeek.push(5); break;
        case "Saturday":
          convertedDaysOfWeek.push(6); break;
        default:
          return undefined;
      }
    }
  }
  return convertedDaysOfWeek;
}

export function convertMonth(month){
  if (typeof month === "number"){
    switch(month){
      case 0:
        return "January";
      case 2:
        return "March";
      case 4:
        return "May";
      case 6:
        return "July";
      case 7:
        return "August";
      case 9:
        return "October";
      case 11:
        return "December";
      case 3:
        return "April";
      case 5:
        return "June";
      case 8:
        return "September";
      case 10:
        return "November";
      case 1:
        return "February";
      default:
        break;
    }
  }
  else if (typeof month === "string"){
    month = month.toLowerCase();
    switch(month){
      case "january":
        return 0;
      case "february":
        return 1;
      case "march":
        return 2;
      case "april":
        return 3;
      case "may":
        return 4;
      case "june":
        return 5;
      case "july":
        return 6;
      case "august":
        return 7;
      case "september":
        return 8;
      case "october":
        return 9;
      case "november":
        return 10;
      case "december":
        return 11;
      default:
        if (month.includes("jan")) return 0;
        else if (month.includes("mar")) return 2;
        else if (month.includes("may")) return 4;
        else if (month.includes("jul")) return 6;
        else if (month.includes("aug")) return 7;
        else if (month.includes("sep")) return 8;
        else if (month.includes("oct")) return 9;
        else if (month.includes("dec")) return 11;
        else if (month.includes("apr")) return 3;
        else if (month.includes("jun")) return 5;
        else if (month.includes("nov")) return 10;
        else if (month.includes("feb")) return 1;
        break;
    }
  }
  return "ERROR";
}

export function getNumberOfDaysInMonth(date){
  const month = date.getMonth();
  switch(month){
    case 0:
      return 31;
    case 1:
      const year = date.getFullYear();
      const isLeapYear = checkIfLeapYear(year);
      if (isLeapYear) return 29;
      return 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
      return 31;
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      return 0;
  }
}
function checkIfLeapYear(year){
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

export function setAcceptableDaysOfMonth(weekOfMonth, numberOfDaysInMonth = 31){
  switch(weekOfMonth){
    case "first":
      return [1, 2, 3, 4, 5, 6, 7];
    case "second":
      return [8, 9, 10, 11, 12, 13, 14];
    case "third":
      return [15, 16, 17, 18, 19, 20, 21];
    case "fourth":
      return [22, 23, 24, 25, 26, 27, 28];
    case "last":
      switch(numberOfDaysInMonth){
        case 31:
          return [25, 26, 27, 28, 29, 30, 31];
        case 30:
          return [24, 25, 26, 27, 28, 29, 30];
        case 28:
          return [22, 23, 24, 25, 26, 27, 28];
        case 29:
          return [23, 24, 25, 26, 27, 28, 29];
        default:
          return `numberOfDaysInMonth must be 28, 29, 30, or 31.`;
      }
    default:
      return `INVALID weekOfMonth! Must be "N/A", "first", "second", "third", "fourth", or "last".`;
  }
}

export function getShortenedDateString(date){
  let dateString = date.toDateString();
  const last3 = `'${dateString.slice(-2)}`
  dateString = dateString.slice(4);
  dateString = dateString.slice(0, -4);
  dateString += last3;
  return dateString;
}
