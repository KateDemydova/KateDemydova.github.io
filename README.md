# Express Server: Користувачі та Статті

Node.js + Express.js сервер, що підтримує REST API для користувачів та статей. 
Додатково реалізовані шаблони EJS (статті) та Pug (користувачі).

## 📦 Встановлення залежності:

```bash
npm install
```
## Запуск сервера

```bash
npm run dev
```

API Роути

⭐ GET /

Кореневий маршрут. Відповідь: текстове повідомлення "API is working".

👤 /users [Pug]

Метод       Шлях                    Опис

GET         /users                  HTML-сторінка зі списком користувачів

GET         /users/:userId          HTML деталі користувача

POST        /users                  Створити користувача { name }

PUT         /users/:userId          Оновити name

DELETE      /users/:userId          Видалити користувача

Middleware: checkUserAccess, validUserData

📄 /articles [EJS]

Метод       Шлях                        Опис

GET         /articles                   HTML-список статей

GET         /articles/:articleId        HTML-деталі статті

POST        /articles                   Створити статтю { title }

PUT         /articles/:articleId        Оновити title

DELETE      /articles/:articleId        Видалити статтю

Middleware: checkArticlePermissions, validArticleData


📓 Middleware

✉ mockAuth
Емуляція авторизованого користувача: додає req.user = { id: '123' }

🔍 requestLogger (опціонально)
Логування HTTP-методу та URL кожного запиту

🔒 validUserData
Валідація: name — обов'язковий рядок

🔒 validArticleData (рекомендовано)
Валідація: title — обов'язковий рядок


## Структура проєкту 
express_3

│├── package.json
├── src/
│   ├── app.mjs
│   ├── server.mjs
│   ├── controllers/
│   │   ├── userController.mjs
│   │   └── articleController.mjs
│   ├── data/
│   │   ├── users.mjs
│   │   └── articles.mjs
│   ├── middlewere/
│   │   ├── mockAuth.mjs
│   │   ├── requestLogger.mjs
│   │   ├── userValidation.mjs
│   │   └── validArticleData.mjs
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

## Технології

express ^5.1.0

ejs / pug

vitest / supertest

nodemon

typescript (опціонально)


## API приклади (Postman)

* GET /users, GET /articles — HTML-сторінки

* POST /articles

{
"title": "Нова стаття"
}

* PUT /articles/123

{
"title": "Оновлена назва"
}

❌ Якщо title не передано:

400 Bad Request
Field "title" is required and must be a string






