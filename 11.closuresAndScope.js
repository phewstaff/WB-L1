/* Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию.
 Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции,
 даже после того, как внешняя функция завершила свое выполнение. */

const outerFunction = () => {
  let counter = 1;
  return () => (counter += 1);
};

const callFunction = outerFunction();
console.log(callFunction());
console.log(callFunction());
console.log(callFunction());
console.log(callFunction());
console.log(callFunction());
