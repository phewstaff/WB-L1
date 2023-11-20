/* Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
112 сообщения
12 сообщений
1 сообщение
1024 пользователя
1026 пользователей
121 пользователь


Функцию надо упаковать в модуль.
 */
/* 
Args:
    - n: число.
    - forms: кортеж из трех форм слова в порядке:
        1. Именительный падеж единственного числа.
        2. Родительный падеж единственного числа.
        3. Родительный падеж множественного числа.
        
    Returns:
    Слово в правильной форме. */

const changeCaseOfWord = (n, formsOfWord) => {
  const stringN = n.toString(); //преобразуем в строку для того, чтобы можно было выбрать конкретную часть данного числа
  const lastTwoDigits = stringN.slice(-2); // последние два числа
  const lastDigit = stringN.slice(-1); // последнее число
  const numberWithSpace = n + " "; // для удобства вывода

  if (lastDigit === "1" && lastTwoDigits !== "11") {
    return numberWithSpace + formsOfWord[0]; // проверка на иминительный в ед.числе
  } else if (
    (lastDigit >= "2" &&
      lastDigit <= "4" &&
      (lastTwoDigits < "12" || lastTwoDigits > "14")) ||
    lastDigit === "0"
  ) {
    return numberWithSpace + formsOfWord[2]; // проверка на родительный в ед.числе
  } else {
    return numberWithSpace + formsOfWord[1]; // все остальное пойдет в родительный падеж мн. числа
  }
};

console.log(changeCaseOfWord(151, ["гвоздь", "гвоздей", "гвоздя"]));
console.log(changeCaseOfWord(12, ["гвоздь", "гвоздей", "гвоздя"]));
console.log(changeCaseOfWord(25, ["гвоздь", "гвоздей", "гвоздя"]));
console.log(changeCaseOfWord(1001, ["гвоздь", "гвоздей", "гвоздя"]));
