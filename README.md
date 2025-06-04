# MongoDB Driver Express App

## 📌 Опис проєкту

Цей проєкт реалізує сервер на основі **Express.js**, який підключається до **MongoDB Atlas** за допомогою офіційного MongoDB Node.js Driver.  
У рамках доопрацювання було додано новий маршрут, який відображає дані з бази MongoDB у вигляді HTML-сторінки.

---

## 🆕 Нова функціональність

- 🔌 Інтеграція з **MongoDB Atlas** через офіційний драйвер
- 🌐 Додано маршрут `GET /users-page`, який:
    - Отримує дані з колекції `users`
    - Виводить їх на HTML-сторінці
    - Генерує фейкові користувачі через `@faker-js/faker`, якщо колекція порожня

---

## ⚙️ Встановлення

### 1. Клонувати репозиторій

https://github.com/KateDemydova/KateDemydova.github.io/tree/feature/mongo_1

2. Встановити залежності
   npm install
3. 
3. Створити .env файл
   
   MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster0.mongodb.net/<your_db>?retryWrites=true&w=majority
   PORT=5000

4. Запуск сервера

node server.mjs

## API маршрути
GET /api/users
Повертає список користувачів у форматі JSON.

POST /api/users

Додає нового користувача. Очікує JSON у тілі:

{
"name": "Ім'я",
"email": "email@example.com"
}

## HTML-інтерфейс
GET /users-page
Виводить список користувачів у вигляді веб-сторінки.

Якщо база порожня, генерує 5 тестових користувачів за допомогою faker.

## Структура проєкту

mongo-driver-app/
├── routes/
│   └── userRoutes.mjs      
├── db.mjs                  
├── server.mjs              
├── .env                    
├── package.json
├── README.md

🛠 Залежності

* express

* mongodb

* dotenv

* @faker-js/faker

