# Завдання

Розширення існуючого Express сервера за допомогою мідлварів.

## Технології

- **Node.js**
- **Express.js**
- **ES Modules**
- **UUID** для генерації ID
- **Postman** (для ручового тестування)

## Структура проекту

project/
├── controllers/
│ ├── articleController.mjs
│ └── userController.mjs
├── data/
│ ├── articles.mjs
│ └── users.mjs
├── middlewere/
│ ├── checkArticlePermissions.mjs
│ ├── userValidation.mjs
│ └── requestLogger.mjs
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
└── README.md

## Розгортання проекту

Сторонні залежності
Встановлюється через:

npm install
+
express
+
uuid

## 🌐 API Маршрути

### `GET /`
- Мідлвар: `requestLogger`
- Відповідь: `Get root route`

---

### `/users`

#### `GET /users`
- Мідлвари: `mockAuth`, `checkUserAccess`
- Повертає список користувачів: `[{ id, name }]`

#### `POST /users`
- Мідлвари: `validUserData`
- Тіло: `{ "name": "Kate" }`
- Відповідь: `{ id, name }`

---

### `/users/:userId`

#### `GET /users/:userId`
- Мідлвари: `mockAuth`, `checkUserAccess`
- Відповідь: `{ id, name }`

#### `PUT /users/:userId`
- Мідлвари: `checkUserAccess`, `validUserData`
- Оновлення користувача

#### `DELETE /users/:userId`
- Мідлвар: `checkUserAccess`
- Відповідь: `204 No Content`

---

### `/articles`

#### `GET /articles`
- Повертає список: `[{ id, title }]`

#### `POST /articles`
- Тіло: `{ "title": "Article Title" }`
- Відповідь: `{ id, title }`

---

### `/articles/:articleId`

#### `GET /articles/:articleId`
- Повертає `{ id, title }` або `404`

#### `PUT /articles/:articleId`
- Мідлвар: `checkArticlePermissions`
- Оновлює статтю

#### `DELETE /articles/:articleId`
- Мідлвар: `checkArticlePermissions`
- Видаляє статтю

---

## 🛡 Мідлвари

| Назва | Призначення |
|-------|-------------|
| `requestLogger` | Логування всіх запитів |
| `mockAuth` | Додає фейкового користувача до `req.user` |
| `checkUserAccess` | Перевірка, чи користувач має доступ до ID |
| `checkArticlePermissions` | Перевірка, чи користувач — власник статті |
| `validUserData` | Валідація тіла запиту користувача |

---

## Тестові дані

У файлах `data/users.mjs` та `data/articles.mjs` зберігаються `Map`:

users.set('123', { name: 'Test User' });
articles.set('456', { title: 'Test Article', ownerId: '123' });


## Виконано

 MVC архітектура

 RESTful API

 Мідлвари для логування, авторизації, валідації

 Тестові дані

 Глобальні обробники помилок (404, 500)