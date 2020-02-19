const userInput = document.querySelector('#search-bar');

const searchBtn = document.querySelector('#search-btn');

const fetching = (data) => {
  return fetch('/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then((res) => console.log(res));
};
// validate the user form


searchBtn.addEventListener('click', () => {
  const data = { value: userInput.value.trim() };
  fetching(data);
});
