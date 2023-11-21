const jsonToLinkedList = (jsonData) => {
  if (!Array.isArray(jsonData)) {
    throw new Error("Инпут должен быть массивом из объектов.");
  }

  if (jsonData.length === 0) {
    return null;
  }

  const createNode = (data) => ({ data, next: null });

  const head = createNode(jsonData[0]); // первый элемент
  let current = head; // нынешний элемент, который при инициализации будет первым, то есть head

  for (let i = 1; i < jsonData.length; i++) {
    // начинаем с 1, и заполняем данные того элемента, который был перед каждой новой итерацией
    current.next = createNode(jsonData[i]);
    current = current.next; // в NEXT элемента до итерации прокидываем данные элемента текущей итерации.
  }

  return head; // вовзращаем результат
};

const jsonData = {};

const linkedList = jsonToLinkedList(jsonData);
console.log(linkedList);
