# Завдання

Розширення існуючого Express-сервера за допомогою мідлварів.

## Технології

- **Node.js**
- **Express.js**
- **ES Modules**
- **Postman** (для ручного тестування)

## Структура проєкту

src/
├── controllers/
│ ├── articleController.mjs
│ └── userController.mjs
├── data/
│ ├── articles.mjs
│ └── users.mjs
├── middlewere/
│ ├── checkArticlePermissions.mjs
│ ├── requestLogger.mjs
│ └── userValidation.mjs
├── mock/
│ └── mockAuth.mjs
├── routes/
│ ├── articles.mjs
│ ├── users.mjs
│ └── index.mjs
├── utils/
│ └── responseHelpers.mjs
├── app.mjs
├── server.mjs
└── ASSIGNMENT.md

## Розгортання проєкту

### Встановлення залежностей

npm install
Зовнішні залежності:

express

## API Маршрути
GET /
Мідлвар: requestLogger

Відповідь: Get root route

/users
GET /users
Мідлвар: mockAuth (глобально застосовується)

Відповідь: [{ id, name }]

POST /users
Мідлвар: validUserData

Тіло: { "name": "Kate" }
Відповідь: { id, name }

/users/:userId
GET /users/:userId
Мідлвари: mockAuth, checkUserAccess
Відповідь: { id, name }

PUT /users/:userId
Мідлвари: checkUserAccess, validUserData
Оновлення користувача

DELETE /users/:userId
Мідлвар: checkUserAccess
Відповідь: 204 No Content

/articles
GET /articles
Відповідь: Get articles route

POST /articles
Тіло: { "title": "Article Title" }
Відповідь: Post articles route

/articles/:articleId
GET /articles/:articleId
Відповідь: Get article by Id route: <id> або 404

PUT /articles/:articleId
Мідлвар: checkArticlePermissions
Оновлення статті

DELETE /articles/:articleId
Мідлвар: checkArticlePermissions
Видалення статті

## Мідлвари

Назва	                Призначення
requestLogger	        Логування всіх вхідних запитів
mockAuth	            Додає фейкового користувача до req.user
checkUserAccess	        Перевірка, чи користувач має доступ до ID
checkArticlePermissions	Перевірка, чи користувач є власником статті
validUserData	        Валідація тіла запиту користувача (name)

## Тестові дані
У файлах data/users.mjs та data/articles.mjs зберігаються Map з попередньо створеними записами:

users.set('1', { name: 'Test User 1' });
articles.set('123', { title: 'Test Article', ownerId: '1' });


## Виконано
✅ MVC-архітектура
✅ RESTful API
✅ Мідлвари для логування, авторизації, валідації
✅ Тестові дані
✅ Глобальні обробники помилок (404, 500)