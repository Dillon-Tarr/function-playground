"use strict";

export function checkIfPalindrome(string){
  // basic version: return string.split('').reverse().join('') == string;
    let lowercaseString = string.toLowerCase();
    let arrayifiedString = [...lowercaseString];
    let unpunctuatedArray = [];
    for (let i = 0; i < arrayifiedString.length; i++){
      switch(arrayifiedString[i]){
        case " ":
        case "`":
        case "'":
        case '’':
        case '′':
        case "(":
        case ")":
        case "[":
        case "]":
        case "{":
        case "}":
        case "<":
        case ">":
        case ":":
        case ";":
        case ",":
        case "‒":
        case "–":
        case "—":
        case "―":
        case "…":
        case "!":
        case ".":
        case "«":
        case "»":
        case "-":
        case "‐":
        case "?":
        case "‘":
        case "’":
        case "“":
        case "”":
        case "/":
        case "⁄":
        case "\\":
        case "~":
        case "@":
        case "#":
        case "$":
        case "%":
        case "^":
        case "&":
        case "*":
        case "¡":
        case "¿":
        case "_":
        case "§":
        case "|":
        case "¦":
          break;
        default:
          unpunctuatedArray.push(arrayifiedString[i]);
          break;
      }
    }
    let reversedUnpunctuatedArray = [...unpunctuatedArray];
    reversedUnpunctuatedArray.reverse();
    return unpunctuatedArray.join('') === reversedUnpunctuatedArray.join('');
  }