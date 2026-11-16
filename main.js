const search = document.querySelector('#search');
const category = document.querySelector('#category');
const cards = [...document.querySelectorAll('.card[data-title]')];
const empty = document.querySelector('#empty');
function updateCards() {
  const q = (search?.value || '').trim().toLocaleLowerCase('zh-Hant');
  const selected = category?.value || '全部';
  let count = 0;
  cards.forEach(card => {
    const match = (card.dataset.title || '').toLocaleLowerCase('zh-Hant').includes(q)
      && (selected === '全部' || card.dataset.category === selected);
    card.hidden = !match;
    if (match) count++;
  });
  if (empty) empty.hidden = count !== 0;
}
search?.addEventListener('input', updateCards);
category?.addEventListener('change', updateCards);
