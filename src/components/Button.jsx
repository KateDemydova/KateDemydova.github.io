import React from "react";

const Button = React.memo(({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl border border-blue-900 shadow-lg hover:bg-blue-900 transition focus:ring focus:ring-blue-400"
    >
      {text}
    </button>
  );
});

export default Button;





