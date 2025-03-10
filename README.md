# Робота з хуком use() в React

Цей проєкт демонструє використання хуку use() у React для роботи з асинхронними даними. 
Реалізовано компонент MessageComponent, який отримує дані з Promise, та форму авторизації LoginForm, 
яка імітує запит на сервер.

## У роботі використовувалися такі технології:

* React
* Type Script
* Vite

## Структура проекту

my-react-app/
├── src/
│   ├── components/
│   │   ├── MessageComponent.tsx
│   │   ├── LoginForm.tsx
│   ├── utils/
│   │   ├── FakeLogin.ts
│   ├── types/
│   │   ├── MessageComponentProps.ts
│   ├── App.tsx
│   ├── main.tsx
├── public/
├── package.json
├── README.md

## Короткий опис

1. MessageComponent за допомогою хука use() отримує дані із Promise 
та їх відображення у вигляді текстового повідомлення.
2. Компонент LoginForm — це форма авторизації у React, яка:
* Отримує логін та пароль від користувача.
* Використовує асинхронний запит (FakeLogin) для перевірки авторизації.
* Відображає статус: очікування, помилку або успішний вхід.

## Ініціалізація проекту

1. Клонуйте рипозиторії проекту

git clone https://github.com/KateDemydova/KateDemydova.github.io.git

2. Перейдіть у папку 

cd my-react-app

3. Ініціалізуйте проект

npm install 

або

yarn install

4. Для збирання використовуйте 

npm run dev

або

yarn run dev
