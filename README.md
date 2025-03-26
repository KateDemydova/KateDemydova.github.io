# React Redux Users App

Проєкт демонструє базову інтеграцію Redux Toolkit в React-додатку для управління користувачами. Реалізовано глобальний стан з використанням `createSlice`, `useSelector`, `useDispatch`, а також винесені селектори для зручного доступу до state.

---

## 🛠 Технології

- React + TypeScript
- Redux Toolkit
- React Redux
- Vite

---

## 📁 Структура проекту 

src/ 
├── components/ │ 
    ├── ParentComponent.tsx │ 
    ├── ChildComponent.tsx │ 
    └── GrandChildComponent.tsx 
├── redux/ │ 
    ├── store.ts │ 
    ├── userSlice.ts │ 
    ├── userSelectors.ts │ 
    └── hook.ts 
├── types/ 
    │ └── user.types.ts 
├── App.tsx 
└── main.tsx

# Слайси користувачів

Проект містить:
* два основні редʼюсери:

- addUser(name: string)

- removeUser(id: string)

* селектор
* типізовані хуки

## Компоненти
GrandChildComponent.tsx
Використовує useAppSelector(selectUsers) для читання стану

Додає та видаляє користувачів через dispatch(addUser) і dispatch(removeUser)

ChildComponent.tsx і ParentComponent.tsx
Використовуються як структурні обгортки для демонстрації вкладеності компонентів.

## Ініціалізація

Клонуйте рипозиторій
git clone https://github.com/KateDemydova/KateDemydova.github.io.git

Перейдіть в папку 
my-redux-app

Встановіть залежності
npm install

Запустіть сервер
npm run dev

## Реалізовано згідно вимог
- Використано Redux Toolkit

- Створено редʼюсери та дії через createSlice

- Використано селектори (selectUsers)

- Підключено Redux Provider (main.tsx)

- Стан users більше не передається через пропси або контекст

- Додаток коректно оновлюється при зміні стану

