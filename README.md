# MongoDB Express App (Dockerized)

Це простий CRUD-додаток на базі Node.js (Express) з підключенням до MongoDB, запущений у Docker.

## Структура проекту

.
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
├── src
│ ├── app.mjs
│ ├── server.mjs
│ ├── db.mjs
│ ├── controllers/
│ ├── routes/
│ ├── mock/
│ ├── middlewere/
│ ├── views/

## Dockerfile

FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "--legacy-watch", "-L", "src/server.mjs"]

## docker-compose.yml

version: '3.9'

services:
app:
build:
context: .
dockerfile: Dockerfile
ports:

            - "3000:3000"

environment:
NODE_ENV: development
MONGO_URI: mongodb://root:example@mongo_main:27017/users?authSource=admin
DB_NAME: users
volumes:

- .:/app
- /app/node_modules
  depends_on:
    - mongo_main
      command: npx nodemon --legacy-watch -L src/server.mjs

mongo_main:
image: mongo:latest
ports:

        - "27017:27017"

environment:
MONGO_INITDB_ROOT_USERNAME: root
MONGO_INITDB_ROOT_PASSWORD: example
volumes:
- ./db:/data/db

## Запуск проекту

Запустити контейнер:

docker-compose up
Відкрити браузер:

http://localhost:3000

## Тестування

Перевірити GET-запит до /users

Створити користувача через POST-запит у Postman:

URL: http://localhost:3000/users

Метод: POST

Body → JSON:

{
"name": "John",
"email": "john@example.com"
}

## Автоматичне оновлення коду

Контейнер Express автоматично відслідковує зміни завдяки:

volumes:

- .:/app
- /app/node_modules
  Можна змінити будь-який .mjs файл — контейнер перезапуститься (через nodemon).

## Технології

Node.js / Express

MongoDB

Docker / Docker Compose

EJS + Pug (двигуни шаблонів)

Postman (для ручного тестування)