const search = document.getElementById('docSearch');
const cards = [...document.querySelectorAll('.document-card')];
const rows = [...document.querySelectorAll('.document-row')];
const updated = document.getElementById('lastUpdated');
if (updated) updated.textContent = new Date().toLocaleDateString(undefined, {year:'numeric', month:'long', day:'numeric'});
if (search) {
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach(card => {
      const hay = (card.dataset.title + ' ' + card.innerText).toLowerCase();
      card.classList.toggle('is-hidden', q && !hay.includes(q));
    });
    rows.forEach(row => {
      const hay = (row.dataset.title + ' ' + row.innerText).toLowerCase();
      row.classList.toggle('is-hidden', q && !hay.includes(q));
    });
  });
}
