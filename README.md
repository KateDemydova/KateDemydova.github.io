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

Маршрути:
POST /register

{ "email": "kate@example.com", "password": "123456" }

POST /login
Встановлює JWT cookie

GET /profile
Захищений маршрут. Потрібен валідний токен у cookie.

Мідлвар requireAuth.mjs:
Зчитує cookie token

Перевіряє автентичність через jsonwebtoken

Якщо токен невалідний — повертає 401

## Безпека

JWT зберігається у httpOnly cookie

Використовується sameSite: 'lax'

Паролі у демонстраційній реалізації не хешуються (але бажано використовувати bcrypt)

## Тестування через Postman

Реєстрація:

POST /register
Body: { "email": "test@mail.com", "password": "1234" }


Вхід:

POST /login
Body: { "email": "test@mail.com", "password": "1234" }

Отримання теми:
GET /theme


## Залежності

express

serve-favicon

cookie-parser

jsonwebtoken

nodemon (dev)
