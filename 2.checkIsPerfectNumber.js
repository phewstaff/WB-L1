/*  Задача о странных числах: Напишите функцию, 
которая принимает число и возвращает true, если это число является странным,
и false в противном случае. Странным числом считается число,
которое равно сумме всех своих делителей, кроме самого себя.
 */

// в описании говорится о совершенном числе, потому что странное число- наоборот, число у котороого из суммы делителей никогда не получится то же самое число.

const checkIsPerfectNumber = (number) => {
  dividers = [];
  sum = 0;
  for (let i = 0; i <= number; i++) {
    number % i === 0 ? dividers.push(i) : "";
  } // сбор всех делителей без остатка в один массив

  dividers.forEach((element) => {
    sum += element;
  }); // проходимся по делителям и суммируем их

  if (sum / number === 2) {
    return true;
  } else return false;
};

console.log(checkIsWeirdNumber(6)); // true
console.log(checkIsWeirdNumber(10)); // false
console.log(checkIsWeirdNumber(28)); // true
console.log(checkIsWeirdNumber(496)); // true
console.log(checkIsWeirdNumber(8128)); //  true
