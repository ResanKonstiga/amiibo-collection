// Remove from wishlist
document.addEventListener('click', async (event) => {
  if (event.target.dataset.deletewishlist) {
    const amiiboId = event.target.dataset.deletewishlist;

    const parent = event.target.closest('.cst-card');

    const response = await fetch('/wishlist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amiiboId,
      }),
    });

    if (response.ok) {
      parent.remove();
    }
  }
});

// Add to collection from wishlist
document.addEventListener('click', async (event) => {
  if (event.target.dataset.collectionfromwish) {
    const amiiboId = event.target.dataset.collectionfromwish;
    const response = await fetch(`https://www.amiiboapi.com//api/amiibo/?tail=${amiiboId}`);
    const responseJson = await response.json();
    const responseArr = responseJson.amiibo;
    const parent = event.target.closest('.cst-card');

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

    const responseDelete = await fetch('/wishlist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amiiboId,
      }),
    });

    if (responseDelete.ok) {
      parent.remove();
    }
  }
});
