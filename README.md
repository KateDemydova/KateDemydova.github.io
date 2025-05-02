#  React Memo + TodoList + Counter App

Цей React-проєкт демонструє практичне використання `React.memo` для оптимізації рендерів, а також містить два незалежних компоненти:

- `TodoList` — список завдань з можливістю додавання/видалення
- `MyButtonCount` — лічильник з кнопкою, що не перерендерюється

---

##  Технології

- ⚛️ React + TypeScript
- 🎯 React.memo
- 💡 useCallback
- 💅 CSS для стилізації
- 🧱 Компонентна структура

---

##  Структура проєкту

src/ 
├── components/ 
│ ├── TodoList.tsx # Список завдань 
│ ├── TodoItem.tsx # Мемоізований елемент списку 
│ └── MyButtonCount.tsx # Лічильник і мемо-кнопка 
├── App.tsx # Основний layout 
├── App.css # Стилі колонок 
└── main.tsx  # Вхідна точка

### ✅ У цьому проєкті:
✅ Коли додається новий todo, старі елементи не перерендерюються.
У компоненті TodoList, при додаванні нового завдання виконується перевірка:

if (trimmed && !todos.includes(trimmed)) {
setTodos((prev) => [...prev, trimmed]);
}
Це гарантує, що однакові завдання не потраплять до списку повторно.

Приклад:

Якщо користувач ввів "Walk dog" двічі — другий раз нічого не додасться.

Пробіли обрізаються автоматично через trim().

✅ Кнопка "Click me" не ререндериться, навіть коли змінюється лічильник — бо onClick передається через useCallback.
const MyButton = memo(({ onClick }: { onClick: () => void }) => {
console.log("Render MyButton");
return <button onClick={onClick}>Click me</button>;
});
🔄 Завдяки React.memo, MyButton не буде перерендерено, якщо onClick не змінюється. 
Для цього функція обгорнута в useCallback.



