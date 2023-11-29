// Напишем функцию, которая будет следить за объемом LS, чтобы при переполнении удалить старые данные с помощью метода Slice для массива
function manageLocalStorageSize() {
  const maxStorageSize = 1 * 1024 * 1024; // 1 MB максимального объема, чтобы было легче наблюдать за поведением
  const currentStorageSize = new Blob([JSON.stringify(storedData)]).size;

  //current storage size почему-то обновляется в консоли только после перезагрузки страницы, так и не смог догнать, почему
  console.log(currentStorageSize);
  console.log(maxStorageSize);

  if (currentStorageSize > maxStorageSize) {
    // Если переполнено, удаляем 20% старых данных.
    // И снова заполняем новыми данными
    const newData = storedData.slice(Math.floor(storedData.length * 0.2));
    localStorage.clear();
    localStorage.setItem("storedData", JSON.stringify(newData));
  }
}

manageLocalStorageSize();

// функция встроена в 19 задании, в данном файле нет контекста
