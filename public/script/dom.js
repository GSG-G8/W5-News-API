const userInput = document.querySelector('#search-bar');
const mainNews = document.querySelector('.main-content');
const searchBtn = document.querySelector('#search-btn');
const eror = document.querySelector('#eror');

fetching({ value: 'palestine' });
const creatNews = (data) => {
  if (Object.keys(data).length === 0) {
    eror.textContent = 'There is No data search again';
  }
  HideNews();
  data.forEach((element) => {
    const news = document.createElement('div');
    news.className = 'news';
    const headLine = document.createElement('p');
    headLine.textContent = element.title;
    headLine.className = 'news-title';
    const newsImg = document.createElement('img');
    newsImg.className = 'news-img';
    newsImg.src = element.urlToImage;
    const newsDetail = document.createElement('p');
    const [first] = element.content.split('.');
    newsDetail.textContent = first;
    newsDetail.className = 'news-p';
    const newsDate = document.createElement('p');
    newsDate.className = 'news-date';
    newsDate.textContent = element.publishedAt;
    mainNews.appendChild(news);
    news.appendChild(headLine);
    news.appendChild(newsImg);
    news.appendChild(newsDetail);
    news.appendChild(newsDate);
  });
};

const HideNews = () => {
  while (mainNews.firstChild) mainNews.removeChild(mainNews.firstChild);
};


searchBtn.addEventListener('click', () => {
  const value = userInput.value;
  if (value === '' || value.startsWith(' ')) {
    eror.textContent = 'Insert Data and search again';
  } else {
    eror.textContent = '';
    const data = { value: value.trim() };
    fetching(data);
  }
});
