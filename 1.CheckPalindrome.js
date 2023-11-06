const checkIfPalindrome = (text) => {
  const noSpacesLowerCase = text.replace(/\s/g, "").toLowerCase(); // Избавляемся от пробелов, а также приводим к нижнему регистру
  const revertedText = noSpacesLowerCase.split("").reverse().join(""); // Инверсия строки, методом разделения каждой буквы на отдельный элемент массива. после реверсии Соединеям все в одну строку
  noSpacesLowerCase === revertedText ? true : false; // Проверка на строгое соответствие развернутой строки и обычной
};

console.log(checkIfPalindrome("аргентина манит негра"));
console.log(checkIfPalindrome("а роза упала на лапу Азора"));
console.log(checkIfPalindrome("saippuakivikauppias"));
