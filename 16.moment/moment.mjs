/* Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами.
Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами. */

import moment from "moment";

// Function to get the current date using Moment.js
const getCurrentDate = () => moment().format("YYYY-MM-DD");

// Export the function
export { getCurrentDate };
