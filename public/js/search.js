// Search
const cardList = document.querySelector('#card-list');
const advancedSearchForm = document.querySelector('#advanced-search-form');
const nameInput = document.querySelector('#name-input');
const gameInput = document.querySelector('#game-input');
const typeSelect = document.querySelector('#type-select');

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

  // All inputs is empty
  if (nameInputValue.length === 0 && gameInputValue.length === 0 && typeSelectValue === 'All') {
    searchResult = [...responseArr];
  }

  // All inputs is full
  if (nameInputValue.length !== 0 && gameInputValue.length !== 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card' || typeSelectValue === 'Band')) {
    searchResult = responseArr.filter((amiibo) => amiibo.gameSeries.includes(gameInputValue)
    && amiibo.name.includes(nameInputValue)
    && amiibo.type.includes(typeSelectValue));
  }

  // Only Type
  if (nameInputValue.length === 0 && gameInputValue.length === 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card' || typeSelectValue === 'Band')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue));
  }

  // Only Name
  if (nameInputValue.length !== 0 && gameInputValue.length === 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.name.includes(nameInputValue));
  }

  // Only Game
  if (nameInputValue.length === 0 && gameInputValue.length !== 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.gameSeries.includes(gameInputValue));
  }

  // Name & Game
  if (nameInputValue.length !== 0 && gameInputValue.length !== 0 && typeSelectValue === 'All') {
    searchResult = responseArr.filter((amiibo) => amiibo.name.includes(nameInputValue)
      && amiibo.gameSeries.includes(gameInputValue));
  }

  // Name & Type
  if (nameInputValue.length !== 0 && gameInputValue.length === 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card' || typeSelectValue === 'Band')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue)
    && amiibo.name.includes(nameInputValue));
  }

  // Type & Game
  if (nameInputValue.length === 0 && gameInputValue.length !== 0 && (typeSelectValue === 'Figure' || typeSelectValue === 'Card' || typeSelectValue === 'Band')) {
    searchResult = responseArr.filter((amiibo) => amiibo.type.includes(typeSelectValue)
    && amiibo.gameSeries.includes(gameInputValue));
  }

  console.log(event.target.dataset.auth);

  if (event.target.dataset.auth === 'true') {
    for (let i = 0; i < searchResult.length; i += 1) {
      searchResultRender.push(
        `
    <div class="card d-flex justify-content-center cst-card">

      <div class="cst-card-img-block d-flex justify-content-center align-items-center">
        <img src=${searchResult[i].image} class="cst-card-img" alt="" />
      </div>

      <div class="card-body">
        <h5 class="card-title">${searchResult[i].character}</h5>
        <h6 class="card-title">${searchResult[i].amiiboSeries}</h6>

        <div class="d-flex flex-column">
          <button type="button" class="btn btn-danger cst-card-btn" data-bs-toggle="modal" data-detail=${searchResult[i].tail} data-bs-target="#exampleModal">
            <img class="cst-btn-icon" src="./images/icons/info.png" alt="" data-detail=${searchResult[i].tail} />
            <span class="cst-btn-text" data-detail=${searchResult[i].tail}>View details</span>
          </button>

          <button type="button" class="btn btn-danger cst-card-btn" data-favorite=${searchResult[i].tail}>
            <img class="cst-btn-icon" src="./images/icons/heart.png" alt="" data-favorite=${searchResult[i].tail} />
            <span class="cst-btn-text" data-favorite=${searchResult[i].tail}>Add to wishlist</span>
          </button>

          <button type="button" class="btn btn-danger cst-card-btn" data-collection=${searchResult[i].tail}>
          <img class="cst-btn-icon" src="./images/icons/plus.png" alt="" data-collection=${searchResult[i].tail} />
          <span class="cst-btn-text" data-collection=${searchResult[i].tail}>Add to collection</span>
          </button>
        </div>
      </div>

    </div>
      `,
      );
    }
  } else {
    for (let i = 0; i < searchResult.length; i += 1) {
      searchResultRender.push(
        `
    <div class="card d-flex justify-content-center cst-card">

      <div class="cst-card-img-block d-flex justify-content-center align-items-center">
        <img src=${searchResult[i].image} class="cst-card-img" alt="" />
      </div>

      <div class="card-body">
        <h5 class="card-title">${searchResult[i].character}</h5>
        <h6 class="card-title">${searchResult[i].amiiboSeries}</h6>

        <div class="d-flex flex-column">
          <button type="button" class="btn btn-danger cst-card-btn" data-bs-toggle="modal" data-detail=${searchResult[i].tail} data-bs-target="#exampleModal">
            <img class="cst-btn-icon" src="./images/icons/info.png" alt="" data-detail=${searchResult[i].tail} />
            <span class="cst-btn-text" data-detail=${searchResult[i].tail}>View details</span>
          </button>
        </div>
      </div>

    </div>
      `,
      );
    }
  }

  if (response.status === 404) {
    cardList.innerHTML = 'Не найдено';
  } else {
    cardList.innerHTML = searchResultRender.join(' ');
  }
});

// Add to wishlist
document.addEventListener('click', async (event) => {
  if (event.target.dataset.favorite) {
    const amiiboId = event.target.dataset.favorite;
    const response = await fetch(`https://www.amiiboapi.com//api/amiibo/?tail=${amiiboId}`);
    const responseJson = await response.json();
    const responseArr = responseJson.amiibo;

    event.preventDefault();
    await fetch('/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amiiboSeries: responseArr[0].amiiboSeries,
        character: responseArr[0].character,
        gameSeries: responseArr[0].gameSeries,
        name: responseArr[0].name,
        type: responseArr[0].type,

        img: responseArr[0].image,

        releaseAu: responseArr[0].release.au,
        releaseEu: responseArr[0].release.eu,
        releaseJp: responseArr[0].release.jp,
        releaseNa: responseArr[0].release.na,

        tail: responseArr[0].tail,
      }),
    });
  }
});

// Add to collection
document.addEventListener('click', async (event) => {
  if (event.target.dataset.collection) {
    const amiiboId = event.target.dataset.collection;
    const response = await fetch(`https://www.amiiboapi.com//api/amiibo/?tail=${amiiboId}`);
    const responseJson = await response.json();
    const responseArr = responseJson.amiibo;

    event.preventDefault();
    await fetch('/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amiiboSeries: responseArr[0].amiiboSeries,
        character: responseArr[0].character,
        gameSeries: responseArr[0].gameSeries,
        name: responseArr[0].name,
        type: responseArr[0].type,

        img: responseArr[0].image,

        releaseAu: responseArr[0].release.au,
        releaseEu: responseArr[0].release.eu,
        releaseJp: responseArr[0].release.jp,
        releaseNa: responseArr[0].release.na,

        tail: responseArr[0].tail,
      }),
    });
  }
});
