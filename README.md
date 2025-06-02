Проєкт Express.js: Аутентифікація, Теми, JWT, Passport
## Опис
Це сервер на Express.js, який реалізує:

Аутентифікацію користувача через JWT та Passport.js.

Збереження улюбленої теми оформлення сайту через Cookies.

Захист приватних маршрутів за допомогою сесій або JWT.

Роботу з шаблонами PUG та EJS.

Обробку статичних ресурсів, включаючи favicon.

src/
├── app.mjs                  
├── config/                   
│   └── passport.mjs          
│
├── controllers/              
│   ├── articleController.mjs
│   ├── authController.mjs
│   ├── themeController.mjs
│   └── userController.mjs
│
├── data/                     
│   ├── articles.mjs
│   └── users.mjs
│
├── middleware/               
│   ├── checkArticlePermissions.mjs
│   ├── requireAuth.mjs
│   ├── requestLogger.mjs
│   ├── userValidation.mjs
│   └── validArticleData.mjs
│
├── mock/                     
│   └── mockAuth.mjs
│
├── public/                   
│   └── favicon.ico
│
├── routes/                  
│   ├── articles.mjs
│   ├── auth.mjs             
│   ├── authPassport.mjs      
│   ├── index.mjs             
│   ├── protected.mjs         
│   ├── theme.mjs
│   └── users.mjs
│
├── utils/                    
│   ├── jwtHelpers.mjs
│   └── responseHelpers.mjs
│
├── views/                   
│   ├── ejs/                  
│   └── pug/                  
└──README.md

## Встановлення

npm install

## Запуск

node server.mjs

## JWT-автентифікація
* Реєстрація

POST /register
Content-Type: application/json
{
"email": "test@example.com",
"password": "123456"
}

* Логін

POST /login
Content-Type: application/json
{
"email": "test@example.com",
"password": "123456"
}

* Профіль

GET /profile
Вимагає наявності токена у cookies

## Passport-сесійна автентифікація
* Реєстрація

POST /register
Content-Type: application/json
{
"email": "test@example.com",
"password": "123456"
}

* Логін

POST /login

* Профіль

GET /profile

* Вихід

GET /logout

## Захищений маршрут

GET /protected

## Тема оформлення
Зберегти тему

POST /theme
Content-Type: application/json
{
"theme": "light" | "dark"
}

Отримати тему

GET /theme

## Шаблони
Підтримуються EJS та PUG.

Favicon підключено через:

<link rel="icon" href="/favicon.ico">

## Cookies та Сесії
Cookies використовуються для збереження теми та JWT токенів.

Сесії створюються через express-session, з параметрами:

httpOnly: true

secure: false (змінити на true у продакшені)

sameSite: 'lax'

## Вимоги
Node.js ≥ 16

npm ≥ 8

