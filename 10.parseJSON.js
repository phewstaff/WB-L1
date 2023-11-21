// 10. Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

function parseJSON(input) {
  // если пустой инпут или начинается с невалидного символа, верни ошибку
  if (input === "" || input[0] === "'") {
    throw Error("Невалидный JSON");
  }

  // проверь input  null, пустой объект, пустой массив, или boolean и верни значение из инпута
  if (input === "null") {
    return null;
  }
  
  if (input === "{}") {
    return {};
  }

  if (input === "[]") {
    return [];
  }

  if (input === "true") {
    return true;
  }

  if (input === "false") {
    return false;
  }

  // если инпут начинается с кавычек, верни значение внутри кавычек
  if (input[0] === '"') {
    return input.slice(1, -1);
  }

  // если инпут начинается с цифры, верни её в числовом формате
  if (!isNaN(parseInt(input[0]))) {
    return parseInt(input[0]);
  }

  // если инпут начинается с фигурной скобки, выполни разбор содержимого внутри скобок
  if (input[0] === "{") {
    return input
      .slice(1, -1)
      .split(",")
      .reduce((acc, item) => {
        // получи ключ и значение свойства JSON, разбив строку по символу двоеточия
        const index = item.indexOf(":");
        const key = item.slice(0, index);
        const value = item.slice(index + 1);
        acc[parseJSON(key)] = parseJSON(value);
        return acc;
      }, {});
  }
  // если инпут - это массив, верни значение внутри массива
  if (input[0] === "[") {
    return input
      .slice(1, -1)
      .split(",")
      .map((x) => parseJSON(x));
  }
}

const jsonData = {
  name: "Juan",
  age: 29,
  address: { street: "Street uspenskaya" },
  isLoading: false,
  ads: null,
  emptyObject: {}
};

console.log(parseJSON(JSON.stringify(jsonData)));
