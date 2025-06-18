# User Management API (Express + Mongoose)

Цей проєкт реалізує REST API для керування користувачами з використанням Node.js, Express та MongoDB (через Mongoose).

---

## 📦 Функціонал

- 🔍 Отримання всіх користувачів
- ➕ Створення користувача
- 📥 Масове додавання користувачів
- 📝 Часткове або повне оновлення користувача
- ❌ Видалення одного або кількох користувачів
- 🌐 Візуалізація користувачів у браузері (HTML)

## ⚙️ Встановлення

git clone
cd my-express-app
npm install

## Запуск

node server.mjs

## API Маршрути

GET /api/users
Отримати всіх користувачів.

POST /api/users
Створити одного користувача.

Body (JSON):

{
"name": "Іван",
"email": "ivan@example.com"
}

POST /api/users/bulk
Масове створення користувачів.

Body (JSON):

[
{ "name": "User 1", "email": "u1@example.com" },
{ "name": "User 2", "email": "u2@example.com" }
]

PATCH /api/users/many
Оновити багато користувачів за фільтром.
Body:

{
"filter": { "name": "Іван" },
"updates": { "email": "new@example.com" }
}

DELETE /api/users/many
Видалити багато користувачів.

Body:

{
"filter": { "name": "Іван" }
}

PATCH /api/users/:id
Оновити одного користувача частково.

PUT /api/users/:id
Замінити повністю користувача за ID.

DELETE /api/users/:id
Видалити одного користувача за ID.

## HTML-представлення

GET /users-page
Виводить список користувачів у HTML-форматі.

Якщо база пуста — генерує фейкові дані з faker.

## Технології

Node.js

Express.js

Mongoose (MongoDB)

Faker.js

REST API

HTML-шаблонізація вручну