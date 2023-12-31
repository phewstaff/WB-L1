/* Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
Другими словами, нужно выполнить следующие шаги:
Вызвать первую функцию из массива.
После завершения работы первой функции вызвать вторую функцию.
После завершения работы второй функции вызвать третью функцию.
И так далее, пока все функции в массиве не будут вызваны по порядку.

 */

const returnOneByOne = (functions) => async () => {
  for (const func of functions) {
    // проходимся по каждой функции в массиве
    await new Promise((resolve) => {
      setTimeout(() => {
        func(); // вызвать функцию текущей итерации
        resolve();
      }, 1000); //с задержкой в секунду
    });
  }
};

// Test Case
const One = () => console.log(1);
const Two = () => console.log(2);
const Three = () => console.log(3);
const testArray = [One, Two, Three];
const testFunc = returnOneByOne(testArray);

testFunc().then(() => console.log("Все функции выполнены"));
