/* Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово
 await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения. */

const asyncFunc = async () => {
  const response = await fetch("/get-some-user-from-some-url"); // Запрашиваем данные с какого-нибудь url, ждем ответа
  const user = response.user;
  return user;
};
