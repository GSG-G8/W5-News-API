const userInput = document.querySelector('#search-bar');

const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
  const data = { value: userInput.value };
  fetching(data);
});
