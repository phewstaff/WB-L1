// Реализовать функцию конвертации JSON в строку

const stringifyObject = (object) => {
  let objectString = ""; // переменная для результата
  objectString += "{"; // вручную открываем строку скобкой

  for (const key in object) {
    // пройдемся по всем ключам в опирируемом объекте
    const value = object[key]; // забираем значиние ключа текущей итерации

    objectString += `"${key}":`; // оборачиваем ключ в строку
    const lastKey = Object.keys(object).pop(); // забираем в новый объект последний элемент, чтобы в дальнейшем не добавлялись лишщние запятые

    if (typeof object[key] === "object") {
      objectString += `${stringifyObject(value)}`; // если значение текущего ключа - объект, вызываем рекурсии, и так будет продолжаться, пока по всем объектам не пройдется
    } else if (typeof value === "string") {
      objectString += `"${value}"`; // оборачиваем строку в двойные кавычки, так как в json не разрешены ординарные
    } else if (typeof object[key] === "number") {
      objectString += `${value}`; // числа добавляем без кавычек
    }

    // в конце каждой итерации добавляем запятую, кроме как для последнего объекта
    if (key !== lastKey) {
      objectString += `,`;
    }
  }

  objectString += "}"; // вручную закрываем строку скобкой
  return objectString;
};

const sampleObj = {
  name: "Juan",
  age: 29,
  address: {
    street: "Street 1",
    number: 3,
  },
};

console.log(stringifyObject(sampleObj));
