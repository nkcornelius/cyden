const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesButton = document.getElementById('acceptCookies');

if (acceptCookiesButton) {
  acceptCookiesButton.addEventListener('click', () => {
    cookieBanner?.classList.remove('visible');
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => filterButton.classList.toggle('active', filterButton === button));

    productCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.style.display = matches ? 'block' : 'none';
    });
  });
});

window.addEventListener('load', () => {
  if (cookieBanner) {
    cookieBanner.classList.add('visible');
  }
});
