import React from "react";
import StateCount from "./assets/State";
import UserStateList from "./assets/Stateless";

const usersData: { id: number; name: string; age: number }[] = [
    { id: 1, name: "Іван Шванов", age: 25 },
    { id: 2, name: "Ганна Смирнова", age: 30 },
    { id: 3, name: "Сергій Петров", age: 40 },
];

function App() {
    return (
        <div className="app">
            <h1>Домашнє завдання: Stateful & Stateless компоненти</h1>
            <StateCount/>
            <UserStateList users={usersData}/>
        </div>
    );
}

export default App;
