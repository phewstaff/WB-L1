/* Задача на работу с объектами: создайте объект, представляющий собой книгу.
Объект должен иметь свойства, такие как: название книги, автор и год издания. 
Напишите методы для получения и изменения значений свойств книги. */

const book = {
  author: "Maxwell Maltz",
  name: "Psycho-Cybernetics",
  year: 1989,

  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  setName: function (newName) {
    this.name = newName;
  },

  setYear: function (newYear) {
    this.year = newYear;
  },
};

book.setAuthor("Napoleon Hill");
book.setName("Think and Grow Rich");
book.setYear(1937);

console.log(book);
