// Удаление из списка желаемого
document.addEventListener('click', async (event) => {
  if (event.target.dataset.delete) {
    const amiiboId = event.target.dataset.delete;

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
