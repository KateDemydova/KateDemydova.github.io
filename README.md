# Express Server with Favicon, Cookies, and JWT Authentication

## 📦 Встановлення

npm install

## Запуск

npm run dev

Сервер стартує на http://localhost:3000

## Структура

├── public/
│   └── favicon.ico               
│
├── src/
│   ├── app.mjs                   
│
│   ├── routes/
│   │   ├── auth.mjs              
│   │   └── theme.mjs             
│
│   ├── controllers/
│   │   ├── authController.mjs    
│   │   └── themeController.mjs   
│
│   ├── middleware/
│   │   └── requireAuth.mjs       
│
│   ├── utils/
│   │   └── jwtHelpers.mjs        
│
│   └── views/
│       ├── pug/                  
│       │   ├── user.pug
│       │   └── users.pug
│       └── ejs/                  
│           ├── article.ejs
│           └── articles.ejs
│
├── package.json
└── README.md


## Функціональність
1. 🖼️ Статичні файли (Favicon)
* Усі HTML-сторінки використовують фавікон favicon.ico, розміщений у папці public.
* Сервер налаштований через serve-favicon:

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

* У шаблонах (PUG або EJS) додається тег:

<link rel="icon" href="/favicon.ico" type="image/x-icon">

## Робота з Cookies
Користувач може зберегти улюблену тему сайту (light або dark) у cookie.

Маршрути:
POST /theme
Зберігає тему у cookie theme

{ "theme": "dark" }


GET /theme
Повертає поточну тему з cookie

Використовується middleware cookie-parser.

## Авторизація через JWT
   Реалізовано:
   ✅ Реєстрація користувача

✅ Вхід у систему з генерацією JWT

✅ Збереження JWT у cookie token (httpOnly)

✅ Захист приватних маршрутів через middleware

## Маршрути
🔐 Аутентифікація (/register, /login, /profile)
Method	Route	Auth	Description
POST	/register	❌	Реєстрація користувача + встановлення JWT
POST	/login	❌	Вхід користувача + встановлення JWT
GET	/profile	✅	Захищений маршрут: повертає req.user

## Токен
JWT зберігається в cookie з прапором httpOnly.

Користувачі (/users)
Method	Route	Auth	Опис
GET	/users	❌	Список користувачів (PUG-шаблон)
POST	/users	❌	Створити користувача (JSON)
GET	/users/:id	✅	Деталі користувача (PUG)
PUT	/users/:id	✅	Оновити ім’я користувача
DELETE	/users/:id	✅	Видалити користувача

## Middleware:
requireAuth – захист GET/PUT/DELETE

validUserData – перевірка поля name

checkUserAccess – дозволяє редагувати лише власний профіль

validArticleData – перевірка поля title

checkArticlePermissions – перевірка власника статті

## Статті (/articles)
Method	Route	Auth	Опис
GET	/articles	✅	Список статей (EJS-шаблон)
POST	/articles	✅	Створити статтю
GET	/articles/:id	✅	Перегляд статті (EJS)
PUT	/articles/:id	✅	Оновити заголовок статті
DELETE	/articles/:id	✅	Видалити статтю

## Теми (/theme)
Method	Route	Auth	Опис
GET	/theme	❌	Отримати тему з cookie
POST	/theme	❌	Зберегти обрану тему в cookie

## Використання cookie:
поле theme (light або dark)

зберігається на 30 днів

## Favicon
Додано favicon.ico у public/

Встановлено через serve-favicon

У шаблонах (PUG, EJS) додано тег:
<link rel="icon" href="/favicon.ico" type="image/x-icon">

## Тестування через Postman

Реєстрація:

POST /register
Body: { "email": "test@mail.com", "password": "1234" }


Вхід:

POST /login
Body: { "email": "test@mail.com", "password": "1234" }

Отримання теми:
GET /theme

🔒 Авторизація повністю базується на JWT + cookies
🧩 Шаблони: PUG для /users, EJS для /articles
🍪 Теми та токени зберігаються в cookie

## Залежності

express

serve-favicon

cookie-parser

jsonwebtoken

nodemon (dev)


