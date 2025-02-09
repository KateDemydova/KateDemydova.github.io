const moviesListElement = document.getElementById('movies-list');
const searchInput = document.getElementById('search');
const searchCheckbox = document.getElementById('checkbox');
const preloader = document.getElementById('preloader');

let lastSearchQuery = null;
let isSearchCheckbox = false;


const showPreloader = () => {
  preloader.classList.add("visible");
};

const hidePreloader = () => {
  preloader.classList.remove("visible");
};
const debounce = (cb, ms) => {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => cb(...args), ms);
    };
   };


const addMoviesToList = ({Poster: poster, Title: title,Year: year}) => {
  const placeholder = "images/No-Image.png"
  const imgSrc = (poster && poster !== "N/A") ? poster : placeholder;

  console.log(`Додається фільм: ${title} (${year}), постер: ${imgSrc}`);

  const item = document.createElement('div');
  const img = document.createElement('img');

  item.classList.add('movie');
  img.src = imgSrc;
  img.alt = `${title} (${year})`;
  img.title = `${title} (${year})`;

  item.append(img);
  moviesListElement.prepend(item);
}

const clearMoviesList = () => {
  moviesListElement.innerHTML = '';
}

const getData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    return data.Search || [];
  } catch (err) {
    console.log("Помилка отримання даних:", err);
    return [];
  }
};

const searchInputHandler = debounce(async (e) => {
    const searchQuery = e.target.value.trim();

    if (!searchQuery || searchQuery.length < 4 || searchQuery === lastSearchQuery) {
      hidePreloader();
      return;
    }
    lastSearchQuery = searchQuery;
    console.log("Пошук", searchQuery);

    if(!isSearchCheckbox) {
      clearMoviesList();
    }
    showPreloader();

try {
  const data = await getData(`https://www.omdbapi.com/?i=tt3896198&apikey=7e150bfd&s=${searchQuery}`)
  hidePreloader();

  if(data.length === 0) {
    console.log("Фільми не знайдено");
  }

  if (!isSearchCheckbox) {
    clearMoviesList();
  }
  data.forEach(addMoviesToList);
    } catch (error) {
  console.log("Помилка при обробці даних:", error);
  hidePreloader();
    }
  }, 2000);


searchInput.addEventListener('input', searchInputHandler);
searchCheckbox.addEventListener('change', (e) => (isSearchCheckbox = e.target.checked))