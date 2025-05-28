# Express Server: Користувачі та Статті

Цей сервер реалізований на основі Node.js і Express.js та демонструє обробку маршрутів для користувачів і статей із використанням шаблонізаторів **Pug** та **EJS**.

## 📦 Встановлення залежності:

```bash
npm install
```
## Запуск сервера

```bash
npm run dev
```

## Шаблони

Pug: views/pug/ — для /users, /users/:userId
EJS: views/ejs/ — для /articles, /articles/:articleId

## Маршрути
👤 /users — Pug
Метод	Шлях	            Опис
GET	/users	                HTML-сторінка зі списком користувачів
GET	/users/:userId	        Сторінка конкретного користувача
POST	/users	            Створення користувача (name)
PUT	/users/:userId	        Оновлення імені користувача
DELETE	/users/:userId	    Видалення користувача

Валідація name, перевірка доступу через middleware checkUserAccess.


/articles — EJS
Метод	Шлях	                 Опис
GET	/articles	                HTML-сторінка зі списком статей
GET	/articles/:articleId	    Сторінка конкретної статті
POST	/articles	            Створення статті (title)
PUT	/articles/:articleId	    Оновлення статті
DELETE	/articles/:articleId	Видалення статті

Захист змін через middleware checkArticlePermissions.

## Структура проєкту 
express_3

│   ├── controllers/
│   │   ├── userController.mjs
│   │   └── articleController.mjs
│   ├── data/
│   │   ├── users.mjs
│   │   └── articles.mjs
│   ├── middlewere/
│   │   ├── mockAuth.mjs
│   │   ├── userValidation.mjs
│   │   └── checkArticlePermissions.mjs
│   ├── routes/
│   │   ├── index.mjs
│   │   ├── users.mjs
│   │   └── articles.mjs
│   └── views/
│       ├── pug/
│       │   ├── users.pug
│       │   └── user.pug
│       └── ejs/
│           ├── articles.ejs
│           └── article.ejs
├── src/
│   └── server.mjs
├── package.json
└── README.md

## Залежності
express ^5.1.0

pug ^3.0.3

ejs ^3.1.10

typescript ^5.8.3 (для типізації або майбутнього переходу)

vitest ^3.1.1 (тести)

nodemon ^3.1.10 (розробка)

supertest ^7.1.0 (тести HTTP-маршрутів)

## Тестування через Postman

GET /users, GET /articles — повертають HTML-сторінки

POST /users, POST /articles — приймають JSON (Content-Type: application/json)

У відповідь — HTML або JSON (в залежності від маршруту)




