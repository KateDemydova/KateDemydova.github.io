# Express REST API Server

Простий RESTful API-сервер, реалізований з використанням **Node.js** та **Express**, що дозволяє працювати з користувачами та статтями. Підтримує маршрути `GET`, `POST`, `PUT`, `DELETE` з відповідними валідаціями та обробкою помилок.

---

## 🔧 Технології

| Назва        | Версія    | Призначення                        |
|--------------|-----------|------------------------------------|
| Node.js      | >=18.x    | Серверна платформа                 |
| Express      | ^4.18.2   | HTTP-сервер та маршрути            |
| Vitest       | ^1.5.0    | Модульне тестування                |
| Supertest    | ^6.3.3    | HTTP-тести з Express               |

---

## 🗂 Структура проєкту

.
├── controllers/
│ ├── userController.mjs
│ └── articleController.mjs
├── routes/
│ ├── users.mjs
│ └── articles.mjs
├── utils/
│ └── responseHelpers.mjs
├── src/
│ └── server.mjs
├── test/
│ └── task1.test.js
├── package.json
└── README.md

📌 API Опис
🔹 Root
GET / → 200 OK → "Get root route"

🔹 Users
GET /users → 200 OK

POST /users → 201 Created (тіло: { name: "..." })

GET /users/:userId → 200 OK або 404 Not Found

PUT /users/:userId → 200 OK (тіло: { name: "..." }) або 400 Bad Request

DELETE /users/:userId → 204 No Content або 404 Not Found

🔹 Articles
GET /articles → 200 OK

POST /articles → 201 Created (тіло: { title: "..." })

GET /articles/:articleId → 200 OK або 404 Not Found

PUT /articles/:articleId → 200 OK (тіло: { title: "..." }) або 400 Bad Request

DELETE /articles/:articleId → 204 No Content або 404 Not Found

⚠️ Обробка помилок
Невідомі маршрути → 404 Not Found

Глобальна помилка (несподіване виключення) → 500 Internal Server Error

## Сценарій використання
Надіслати GET /users — отримаєш "Get users route".

Створити нового користувача — POST /users { name: "..." }.

Отримати користувача за ID — GET /users/123.

Оновити користувача — PUT /users/123 { name: "Updated" }.

Видалити користувача — DELETE /users/123.

Те ж саме для /articles.

