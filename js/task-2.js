'use strict';

  function makeArray (firstArray, secondArray, maxLength){

  const newArray = firstArray.concat(secondArray);
    if (newArray.length <= maxLength) {
      return newArray;
    }
    else  {
      return newArray.slice(0, maxLength)
}

// function makeArray(firstArray, secondArray, maxLength) {
    
//     const newArray = firstArray.concat(secondArray);
 
//     if (newArray.length <= maxLength) {
//         return newArray;
//     }
//     else if (newArray.length > maxLength) {
//         newArray.length = maxLength;
//         return newArray;
//     }

// }
    
// //Ваше рішення завдання 2 добре, але більш доцільно використовувати просто if  else , замість if  else if.


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



   