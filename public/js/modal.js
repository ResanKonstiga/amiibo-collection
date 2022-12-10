// Show details in modal window
const exampleModalLabel = document.querySelector('#exampleModalLabel');
const modalImg = document.querySelector('#modal-img');
const modalAmiiboSeries = document.querySelector('#modal-amiibo-series');
const modalCharacter = document.querySelector('#modal-character');
const modalGameSeries = document.querySelector('#modal-game-series');
const modalName = document.querySelector('#modal-name');
const modalType = document.querySelector('#modal-type');
const modalReleaseAu = document.querySelector('#modal-release-au');
const modalReleaseEu = document.querySelector('#modal-release-eu');
const modalReleaseJp = document.querySelector('#modal-release-jp');
const modalReleaseNa = document.querySelector('#modal-release-na');

document.addEventListener('click', async (event) => {
  if (event.target.dataset.detail) {
    const amiiboId = event.target.dataset.detail;
    const response = await fetch(`https://www.amiiboapi.com//api/amiibo/?tail=${amiiboId}`);
    const responseJson = await response.json();
    const responseArr = responseJson.amiibo;

    exampleModalLabel.innerText = `${responseArr[0].name}`;
    modalImg.src = `${responseArr[0].image}`;

    modalAmiiboSeries.innerText = `Amiibo Series: ${responseArr[0].amiiboSeries}`;
    modalCharacter.innerText = `Character: ${responseArr[0].character}`;
    modalGameSeries.innerText = `Game Series: ${responseArr[0].gameSeries}`;
    modalName.innerText = `Name: ${responseArr[0].name}`;
    modalType.innerText = `Type: ${responseArr[0].type}`;

    modalReleaseAu.innerText = `AU: ${responseArr[0].release.au}`;
    modalReleaseEu.innerText = `EU: ${responseArr[0].release.eu}`;
    modalReleaseJp.innerText = `JP: ${responseArr[0].release.jp}`;
    modalReleaseNa.innerText = `NA: ${responseArr[0].release.na}`;
  }
});
