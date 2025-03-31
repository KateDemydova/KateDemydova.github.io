# 🧠 React Redux App with AsyncThunk

Цей проєкт демонструє використання Redux Toolkit у React-додатку з асинхронними діями (`createAsyncThunk`), станами завантаження, локальним додаванням/видаленням користувачів та моканими API-викликами.

## 📦 Стек технологій

- React
- Redux Toolkit
- TypeScript
- AsyncThunk
- Мокані дані (`Promise.resolve`)

---

## 📁 Структура проекту 

src/
├── components/
│   ├── ParentComponent.tsx
│   ├── ChildComponent.tsx
│   └── GrandChildComponent.tsx
├── redux/
│   ├── store.ts
│   ├── hook.ts
│   ├── userSlice.ts         
│   └── userSelectors.ts     
├── types/
│   └── user.types.ts        
├── App.tsx
└── main.tsx


## Основна логіка

fetchUsers: асинхронне завантаження користувачів (мокано).

addUser(name): додавання користувача в список.

removeUser(id): видалення користувача.

UI показує статуси:

"Loading..." при завантаженні

"Something went wrong..." при помилці


## Ініціалізація

Клонуйте рипозиторій
git clone https://github.com/KateDemydova/KateDemydova.github.io.git

Перейдіть в папку 
my-redux-app

Встановіть залежності
npm install

Запустіть сервер
npm run dev



