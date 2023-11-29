document.addEventListener("DOMContentLoaded", function () {
  // Получаем данные из источника
  fetch(
    "http://www.filltext.com/?rows=100&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  )
    .then((response) => response.json())
    .then((data) => {
      // Вызываем функцию для создания и заполнения таблицы
      buildTable(data);

      const itemsPerPage = 10; // Устанавливаем количество элементов на странице
      let currentPage = 1;

      // Функция для отображения данных текущей страницы
      function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPageData = data.slice(startIndex, endIndex);
        buildTable(currentPageData);
        updatePaginationInfo();
      }

      // Функция для обновления информации о пагинации
      function updatePaginationInfo() {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        document.getElementById("totalPages").textContent = totalPages;
        document.getElementById("currentPage").textContent = currentPage;
      }

      // Обработчик события для кнопки предыдущей страницы
      document
        .getElementById("prevPage")
        .addEventListener("click", function () {
          if (currentPage > 1) {
            currentPage--;
            displayCurrentPage();
          }
        });

      // Обработчик события для кнопки следующей страницы
      document
        .getElementById("nextPage")
        .addEventListener("click", function () {
          if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            currentPage++;
            displayCurrentPage();
          }
        });

      // Начальное отображение данных
      displayCurrentPage();

      // Добавляем обработчик события для кликов по заголовкам таблицы
      document.querySelectorAll("th").forEach((th) => {
        th.addEventListener("click", function () {
          let column = this.dataset.column;
          let order = this.dataset.order;

          // Переключаем порядок сортировки
          order = order === "desc" ? "asc" : "desc";
          this.dataset.order = order;

          // Сортируем данные
          data.sort((a, b) => {
            const valueA = String(a[column] || "").toLowerCase();
            const valueB = String(b[column] || "").toLowerCase();
            return order === "asc"
              ? valueA.localeCompare(valueB)
              : valueB.localeCompare(valueA);
          });

          // Перестраиваем таблицу
          displayCurrentPage(); // Обновляем отображаемые данные после сортировки
        });
      });
    })
    .catch((error) => console.error("Ошибка при получении данных:", error));
});

function buildTable(data) {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
      <td>${data[i].fname}</td>
      <td>${data[i].lname}</td>
      <td>${data[i].tel}</td>
      <td>${data[i].address}</td>
      <td>${data[i].city}</td>
      <td>${data[i].state}</td>
      <td>${data[i].zip}</td>
    </tr>`;
    table.innerHTML += row;
  }
}
