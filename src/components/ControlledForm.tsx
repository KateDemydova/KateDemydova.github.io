import { useState } from "react";
import "./ControlledForm.css"

function ControlledForm() {
    const[text, setText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Введений текст: ${text}`);
    };

    return (
        <div className="text-container">
            <form onSubmit={handleSubmit}>
                <input className="input"
                       type="text"
                       value={text}
                       onChange={handleChange}
                       placeholder="Введіть текст"
                />
                <button type="submit" className="button">Надіслати</button>
            </form>
            <p className="input-item">Ви ввели: {text}</p>
        </div>

    )
}

export default ControlledForm;
