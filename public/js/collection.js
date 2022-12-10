// Remove from collection
document.addEventListener('click', async (event) => {
  if (event.target.dataset.deletecollection) {
    const amiiboId = event.target.dataset.deletecollection;

    const parent = event.target.closest('.cst-card');

    const response = await fetch('/collection', {
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
