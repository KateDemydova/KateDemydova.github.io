# Розробка з використанням хука useEffect і Axios

## Мета: 
Реалізувати виконання та обробку запитів до HTTP-серверів за допомогою асинхронних запитів 
з використанням useEffect і Axios.

## Ініціалізація проекту:
Клонуйте рипозиторій:
git clone https://github.com/KateDemydova/KateDemydova.github.io.git

Перейдіть до каталогу проекту:
cd my-react-app

Встановіть модулі:
npm install

## Структура проекту:

📦 my-react-app
├── 📂 node_modules (library root)
├── 📂 public
├── 📂 src
│   ├── 📂 assets
│   ├── 📂 components
│   │   ├── 📄 DataFetcher.tsx
│   │   ├── 📄 DataFetcher.css
│   │   ├── 📄 PostItem.tsx
│   │   ├── 📄 PostItem.css
│   ├── 📂 types
│   ├── 📄 App.tsx
│   ├── 📄 App.css
│   ├── 📄 index.css
│   ├── 📄 main.tsx
│   ├── 📄 vite-env.d.ts
├── 📄 .gitignore
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts

## Опис проекта:
DataFetcher – компонент у React, який отримує дані про пост з HTTP-сервера на основі змінного id. 
Він використовує useState для збереження стану (пост, помилка, завантаження) та useEffect для виконання 
запитів. При кожному зміненні id компонент робить новий запит, а користувач може завантажувати наступний пост кнопкою. 
Вбудована обробка помилок і скасування запитів допомагають уникнути некоректної поведінки.


##  Технології, що використовувались:
* React
* TypeScript
* Vite
* Axios


