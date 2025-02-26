import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    alert("You clicked me!");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="p-8 flex flex-col gap-6 max-w-xl mx-auto bg-gray-200 rounded-xl shadow-lg border border-gray-300">
      <Button text="Натисніть сюди" type="button" onClick={handleClick} />
      <Input placeholder="Введіть текст" type="text" onChange={handleChange} />
      <p className="mt-4 text-gray-800 text-lg font-semibold">Введений текст: {inputValue}</p>
    </div>
  );
}

export default App;

