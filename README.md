# React-проєкт: Перегляд постів з автоперемиканням
Цей проєкт демонструє простий інтерфейс для завантаження постів з API, їх перегляду та автоматичного перемикання через заданий інтервал часу.

## Технології
React (Vite або Create React App)

TypeScript

Axios

react-icons

react-toastify


## Функціонал


* Таймер автопереходу на наступний пост кожні 10 секунд

* Іконка із пульсуючим ефектом при завантаженні

* Повідомлення через toast про нове завантаження

## Компоненти
DataFetcher.tsx — головний компонент, що відповідає за запити до API та стан.

PostItem.tsx — компонент для відображення одного поста.

AutoTimer.tsx — таймер, що викликає автоперемикання.

react-icons — для SVG-іконки.

react-toastify — сповіщення про завантаження постів.

## Структура проекту

src/
├── components/
│   ├── AutoTimer.tsx
│   ├── DataFetcher.tsx
│   └── PostItem.tsx
├── types/
│   └── Post.interface.ts
├── App.tsx
├── main.tsx
└── styles.css (або DataFetcher.css)