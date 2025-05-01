import { memo } from "react";
import { IoTrashBin } from "react-icons/io5";

type TodoItemProps = {
    todo: string;
    onRemove: (todo: string) => void;
};

const TodoItem = memo(({ todo, onRemove }: TodoItemProps) => {
    console.log("Render TodoItem:", todo);
    return (
        <li className="todo-item">
            <span>{todo}</span>
            <button className="remove-button" onClick={() => onRemove(todo)}>
                <IoTrashBin />
            </button>
        </li>
    );
});

export default TodoItem;