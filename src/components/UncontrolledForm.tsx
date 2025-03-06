import {useRef} from "react";
import "./UncontrolledForm.css"

function UncontrolledForm() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(inputRef.current) {
            if (!inputRef.current.value.trim()) {
                alert("Поле не може бути порожнім!");
                return;
            }

            alert(`Entered value: ${inputRef.current.value}`);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-box">
                <h2 className="form-title">Неконтрольований компонент</h2>
                <input type="text" ref={inputRef} className="form-input"
                       placeholder="Введіть дані" autoFocus />
                <button type="submit" className="form-button">Надіслати</button>
            </form>
        </div>
    );
}

export default UncontrolledForm;