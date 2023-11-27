let offset = 10; // Число, к которому нужно дозагрузить новые записи
const count = 10; // Кол-во записей на загрузку
let isLoading = false;

const itemsContainer = document.getElementById("itemsContainer");
const itemTemplate = document.getElementById("itemTemplate");
const loadingText = document.createElement("p");
loadingText.textContent = "Загрузка...";

const storedData = JSON.parse(localStorage.getItem("storedData")) || [];

function fetchData() {
  if (isLoading) {
    return; // Prevent repeated requests
  }

  isLoading = true;

  itemsContainer.appendChild(loadingText);

  let apiURL;
  if (storedData.length === 0) {
    apiURL = `https://api.vk.com/method/wall.get?count=${count}&offset=${offset}&access_token=734fe7a6734fe7a6734fe7a617705981c37734f734fe7a61610f5e870e83435cd137f91&owner_id=-25720568&fields=bdate&v=5.131&callback=callbackFunc`;
  } else {
    // Если в хранилище уже есть данные, делаем запрос со смещенным оффсетом, чтобы загрузить данные,которых нет
    apiURL = `https://api.vk.com/method/wall.get?count=${count}&offset=${
      offset + storedData.length
    }&access_token=734fe7a6734fe7a6734fe7a617705981c37734f734fe7a61610f5e870e83435cd137f91&owner_id=-25720568&fields=bdate&v=5.131&callback=callbackFunc`;
  }

  // Добавляем скрипт JSONP, который нужен для обхода CORS.
  const script = document.createElement("SCRIPT");
  script.src = apiURL;
  document.getElementsByTagName("head")[0].appendChild(script);
  script.onload = function () {
    document.head.removeChild(script);
  };

  offset += count;
}

if (storedData.length === 0) {
  fetchData();
} else {
  // Если данные уже есть, отображаем LS
  storedData.forEach((item) => {
    console.log(item);
    const newItem = document.importNode(itemTemplate.content, true);
    newItem.querySelector(".item-text").textContent = item.text;
    if (item.attachments[0].photo) {
      newItem.querySelector(".item-image").src =
        item.attachments[0].photo.sizes[9]?.url;
    }

    newItem.querySelector("#likes").textContent = item.likes.count;
    newItem.querySelector("#comments").textContent = item.comments.count;
    newItem.querySelector("#reposts").textContent = item.reposts.count;
    newItem.querySelector("#views").textContent = item.views.count;

    itemsContainer.appendChild(newItem);
  });
}
// Функция resolve, которая принимается как параметр при запросе к api через JSONP
function callbackFunc(result) {
  isLoading = false;

  if (loadingText) {
    loadingText.remove(); // Убираем лоадер при успешном запросе
  }

  if (result.response && result.response.items) {
    // Сохранение данных в LS
    const storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    storedData.push(...result.response.items);
    localStorage.setItem("storedData", JSON.stringify(storedData));

    // Отображение новых данных
    result.response.items.forEach((item) => {
      const newItem = document.importNode(itemTemplate.content, true);
      newItem.querySelector(".item-text").textContent = item.text;
      itemsContainer.appendChild(newItem);
    });
  } else {
    itemsContainer.textContent = "Ошибка загрузки данных";
  }
}

// Scroll event listener
itemsContainer.addEventListener("scroll", function () {
  if (
    itemsContainer.scrollTop + itemsContainer.clientHeight >=
    itemsContainer.scrollHeight - 10
  ) {
    fetchData(); // Запрос новых данных при скролле
  }
});

// Напишем функцию, которая будет следить за объемом LS, чтобы при переполнении удалить старые данные с помощью метода Slice для массива
function manageLocalStorageSize() {
  const maxStorageSize = 5 * 1024 * 1024; // 5 MB
  const currentStorageSize = new Blob([JSON.stringify(storedData)]).size;

  if (currentStorageSize > maxStorageSize) {
    // Если переполнено, удаляем 20% старых данных.
    const newData = storedData.slice(Math.floor(storedData.length * 0.2));
    localStorage.setItem("storedData", JSON.stringify(newData));
  }
}

manageLocalStorageSize();
