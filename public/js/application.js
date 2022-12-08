// Быстрый поиск в навигационном меню
const inputSearch = document.querySelector('#input-search');
const searchForm = document.querySelector('#search-form');
const cardList = document.querySelector('#card-list');

// Расширенный поиск
const advancedSearchForm = document.querySelector('#advanced-search-form');
const nameInput = document.querySelector('#name-input');
const gameInput = document.querySelector('#game-input');
const typeSelect = document.querySelector('#type-select');

// Подробная информация в модальном окне
const exampleModalLabel = document.querySelector('#exampleModalLabel');
const modalImg = document.querySelector('#modal-img');
const modalAmiiboSeries = document.querySelector('#modal-amiibo-series');
const modalCharacter = document.querySelector('#modal-character');
const modalGameSeries = document.querySelector('#modal-game-series');
const modalName = document.querySelector('#modal-name');
const modalType = document.querySelector('#modal-type');

// Быстрый поиск на главной странице по серии игр
searchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
  const responseJson = await response.json();
  const responseArr = responseJson.amiibo;

  const inputSearchValue = inputSearch.value;

  const searchResult = responseArr.filter((amiibo) => amiibo.gameSeries.includes(inputSearchValue));
  const searchResultRender = [];

  for (let i = 0; i < searchResult.length; i += 1) {
    searchResultRender.push(
      `
      <div class="card d-flex justify-content-center align-items-center">
        <div class="cst-card-img-block d-flex justify-content-center align-items-center">
          <img src=${searchResult[i].image} class="cst-card-img" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${searchResult[i].character}</h5>
          <h6 class="card-title">${searchResult[i].amiiboSeries}</h6>
          <h6 class="card-title">${searchResult[i].type}</h6>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `,
    );
  }

  if (response.status === 404) {
    cardList.innerHTML = 'Не найдено';
  } else {
    cardList.innerHTML = searchResultRender.join(' ');
  }
});

// Расширенный поиск
advancedSearchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInputValue = nameInput.value;
  const gameInputValue = gameInput.value;
  const typeSelectValue = typeSelect.value;

  let searchResult = [];
  const searchResultRender = [];

  const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
  const responseJson = await response.json();
  const responseArr = responseJson.amiibo;

  // Не заполнены все поля
  if (nameInputValue.length === 0 && gameInputValue.length === 0 && typeSelectValue === 'All') {
    searchResult = [...responseArr];
  }

  // Заполнены все поля
  if (nameInputValue.length !== 0 && gameInputValue.length !== 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card')) {
    searchResult = responseArr.filter((amiibo) => amiibo.gameSeries.includes(gameInputValue)
    && amiibo.name.includes(nameInputValue)
    && amiibo.type.includes(typeSelectValue));
  }

  // Заполнен только Type
  if (nameInputValue.length === 0 && gameInputValue.length === 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue));
  }

  // Заполнен только Name
  if (nameInputValue.length !== 0 && gameInputValue.length === 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.name.includes(nameInputValue));
  }

  // Заполнен только Game
  if (nameInputValue.length === 0 && gameInputValue.length !== 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.gameSeries.includes(gameInputValue));
  }

  // Заполнены Name и Game
  if (nameInputValue.length !== 0 && gameInputValue.length !== 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.name.includes(nameInputValue)
      && amiibo.gameSeries.includes(gameInputValue));
  }

  // Заполнены Name и Type
  if (nameInputValue.length !== 0 && gameInputValue.length === 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue)
    && amiibo.name.includes(nameInputValue));
  }

  // Заполнены Type и Game
  if (nameInputValue.length === 0 && gameInputValue.length !== 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue)
    && amiibo.gameSeries.includes(gameInputValue));
  }

  for (let i = 0; i < searchResult.length; i += 1) {
    searchResultRender.push(
      `
      <div class="card d-flex justify-content-center align-items-center">
        <div class="cst-card-img-block d-flex justify-content-center align-items-center">
          <img src=${searchResult[i].image} class="cst-card-img" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">${searchResult[i].character}</h5>
          <h6 class="card-title">${searchResult[i].amiiboSeries}</h6>
          <h6 class="card-title">${searchResult[i].type}</h6>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-detail=${searchResult[i].tail} data-bs-target="#exampleModal">
          Details
          </button>
        </div>
      </div>
      `,
    );
  }

  if (response.status === 404) {
    cardList.innerHTML = 'Не найдено';
  } else {
    cardList.innerHTML = searchResultRender.join(' ');
  }
});

// Вывод подробной информации в модаль
document.addEventListener('click', async (event) => {
  if (event.target.dataset.detail) {
    const amiiboId = event.target.dataset.detail;
    const response = await fetch(`https://www.amiiboapi.com//api/amiibo/?tail=${amiiboId}`);
    const responseJson = await response.json();
    const responseArr = responseJson.amiibo;
    console.log(responseArr[0]);

    exampleModalLabel.innerText = `${responseArr[0].name}`;
    modalImg.src = `${responseArr[0].image}`;
    modalAmiiboSeries.innerText = `Amiibo Series: ${responseArr[0].amiiboSeries}`;
    modalCharacter.innerText = `Character: ${responseArr[0].character}`;
    modalGameSeries.innerText = `Game Series: ${responseArr[0].gameSeries}`;
    modalName.innerText = `Name: ${responseArr[0].name}`;
    modalType.innerText = `Type: ${responseArr[0].type}`;
  }
});
