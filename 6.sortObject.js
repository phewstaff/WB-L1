/* Задача о сортировке объектов: у вас есть массив объектов вида
 { name: 'John', age: 25 }.
  Напишите код, который сортирует этот массив по возрастанию возраста,
 а при равных возрастах сортирует по алфавиту по полю name. */

const sortObjects = (objects) => {
  objects.sort((a, b) => {
    if (a.age === b.age) {
      // если года одинаковые, отсортируй по имени
      return a.name.localeCompare(b.name); // метод для сравнения порядка по алфавиту
    } else {
      // иначе отсортируй по годам
      return a.age - b.age;
    }
  });
};

// пример
const arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Balice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "aob", age: 25 },
];

sortObjects(arrayOfObjects);

console.log(arrayOfObjects);
