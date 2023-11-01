"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const shop = document.querySelector('.my_shop');

for (const iterator of initialData) {
  const divEl = document.createElement('div');
  divEl.className = 'product';
  shop.appendChild(divEl);
  const headerEl = document.createElement('h1');
  headerEl.textContent = iterator.product;
  divEl.appendChild(headerEl);
  const olEl = document.createElement('ol');  
  for (const item of iterator.reviews) {
        const liEl = document.createElement('li');
        liEl.textContent = item.text;
        olEl.appendChild(liEl);
  } 
  divEl.append(olEl); 
  const text = document.createElement('textarea');
  divEl.appendChild(text);
  const button = document.createElement('button');
  button.innerText = 'Опубликовать отзыв';
  button.type = 'submit';
  button.addEventListener('click', OnClick);
  divEl.appendChild(button);
  const errorField = document.createElement('p');
  errorField.className = 'error';
  divEl.appendChild(errorField);
}

function OnClick(event){
  const button = event.target;
  const text = button.previousSibling;
  const errorField = button.nextSibling;
  errorField.textContent = '';
  const review = text.value;
  if (review.length >= 50 && review.length <= 500){
    const olEl = text.previousSibling;
    const liEl = document.createElement('li');
    liEl.textContent = review;
    olEl.appendChild(liEl);
  }
  else{
    errorField.textContent = 'Ваш отзыв не удовлетворяет требованиям: от 50 до 500 знаков!'
  }
  text.value = '';
}
