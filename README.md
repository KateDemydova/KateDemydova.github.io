# MongoDB Driver Express CRUD API

Цей проєкт реалізує повноцінний REST API для керування колекцією користувачів у базі даних MongoDB Atlas з використанням Node.js, Express та офіційного MongoDB Node.js драйвера.

## Функціонал

### Створення даних

* POST /api/users

Додає одного користувача

Body:

{
"name": "Олена",
"email": "olena@example.com"
}

Response:

{
"_id": "...",
"name": "Олена",
"email": "olena@example.com"
}

* POST /api/users/bulk

Додає масив користувачів

Body:

[
{"name": "Іван", "email": "ivan@example.com"},
{"name": "Олег", "email": "oleg@example.com"}
]

Response:

{
"insertedCount": 2,
"insertedIds": {"0": "...", "1": "..."}
}

* Оновлення даних

▶️ PATCH /api/users/:id

Оновлення одного користувача за id

Body:

{
"name": "Новий Ім'я"
}

Response:

{
"message": "User updated successfully",
"modifiedCount": 1
}

* PATCH /api/users/many

Оновлення багатьох документів за фільтром

Body:

{
"filter": {"role": "user"},
"updates": {"active": true}
}

* PUT /api/users/:id

replaceOne: повна заміна документа за id

Body:

{
"name": "Повністю нове ім'я",
"email": "new@example.com"
}

* Видалення даних

▶️ DELETE /api/users/:id

Видаляє одного користувача за _id

▶️ DELETE /api/users/many

Видаляє багато користувачів за фільтром

Body:

{
"filter": {"role": "user"}
}

Response:

{
"deletedCount": 5,
"message": "Documents deleted successfully"
}

* Читання з проекцією

▶️ GET /api/users

Повертає список користувачів з полями name та email (без _id)

Response:

[
{"name": "Іван", "email": "ivan@example.com"},
{"name": "Олег", "email": "oleg@example.com"}
]

## HTML-сторінка користувачів

* GET /users-page

Рендерить HTML-сторінку зі списком користувачів. Якщо колекція пуста, генерує 5 фейкових користувачів за допомогою @faker-js/faker.

## Встановлення

* Клонувати репозиторій

* Створити файл .env з:

MONGO_URI=your_mongodb_atlas_connection_string

* Встановити залежності:

npm install

* Запустити:

node server.mjs

## Стек

Node.js

Express.js

MongoDB Atlas

MongoDB Node.js Driver

@faker-js/faker