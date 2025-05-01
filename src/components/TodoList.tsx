import { useState} from "react";
import TodoItem from "./TodoItem";



const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<string[]>(["Walk dog", "Buy milk", "Charge phone", "Read book"]);

    const removeTodo = (todoRemove: string) => {
        setTodos((prev) => prev.filter((todo) => todo !== todoRemove));
    }

    const handleAddTodo = () => {
        const trimmed = inputValue.trim();
        if (trimmed && !todos.includes(trimmed)) {
            setTodos((prev) => [...prev, trimmed]);
        }
        setInputValue("");
    };

    return (
        <div className="todo-wrapper">
            <div className="todo-input-group">
                <input
                    placeholder="Add new todo"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem key={todo} todo={todo} onRemove={removeTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
