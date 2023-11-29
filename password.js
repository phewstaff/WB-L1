function analyzePassword(password) {
  // Проверка на количество символов, мин 8
  const lengthRegex = /^.{8,}$/;

  // Проверка на строчные буквы
  const lowercaseRegex = /[a-z]/;

  // Проверка на заглавную букву
  const uppercaseRegex = /[A-Z]/;

  // Проверка на наличие хотябы одной цифры
  const digitRegex = /\d/;

  // Проверка на особый символ
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // определим по пароли по сложностям
  let complexity = "Слабый";
  // если по всем параметрам true, то сильный пароль
  if (
    lengthRegex.test(password) &&
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    complexity = "Сильный";
  } else if (
    // если по количеству символов true, и true по любому из других проверок, то средний пароль, во всех других случаях будет слабый пароль
    lengthRegex.test(password) &&
    (lowercaseRegex.test(password) ||
      uppercaseRegex.test(password) ||
      digitRegex.test(password))
  ) {
    complexity = "Средний";
  }

  // Добавим подсказки к каждому кейсу
  let suggestions = [];
  if (!lengthRegex.test(password)) {
    suggestions.push("Добавьте больше символов (Хотябы 8 символов ).");
  }
  if (
    !(
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    )
  ) {
    suggestions.push(
      "Будет лучше, если объединить строчные, заглавные буквы, цифры и особые символы."
    );
  }

  return {
    complexity,
    suggestions,
  };
}

// Пример использования (Проверка не будет точна с кириллицей)
const password = "ngrФ+@sdafkjAsdflkd123";
const result = analyzePassword(password);
console.log(`степень надежности пароля: ${result.complexity}`);
console.log("Подсказка:", result.suggestions.join(", "));
