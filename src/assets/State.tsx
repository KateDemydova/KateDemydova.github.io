import React, { useState } from "react";
import "../assets/state.css"

export default function StateCount(){
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div className="counter-container">
                <h1 className="counter-title">Лічильник: {count}</h1>
                <div className="button-group">
                    <button className="counter-button increase" onClick={() => setCount(count + 1)}>
                        Збільшити
                    </button>
                    <button className="counter-button decrease" onClick={() => setCount(count - 1)}>
                        Зменшити
                    </button>
                </div>
            </div>
        </>
    );
}
