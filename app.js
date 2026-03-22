const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`В списке ${categoryItems.length} категории.`);

categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('li').length;

  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${elementsCount}`);
});

const ingredients = [
  'Картофель',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientItems = ingredients.map(text => {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
});

ingredientsList.append(...ingredientItems);

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img class="gallery-img" src="${url}" alt="${alt}"></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateValue = () => {
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);