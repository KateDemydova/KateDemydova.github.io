import React from "react";

const Input = React.memo(({ placeholder, type = "text", onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 py-2 border rounded-lg w-full focus:ring focus:ring-blue-400 shadow-sm"
    />
  );
});

export default Input;
