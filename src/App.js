import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import MessageComponent from "./components/MessageComponent";
import LoginForm from "./components/LoginForm";
const fetchMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Дані завантажено!');
        }, 2000);
    });
};
const App = () => {
    return (_jsxs("div", { className: "app-container", children: [_jsx(LoginForm, {}), _jsx("h1", { className: "app-title", children: "Message Component" }), _jsx(Suspense, { fallback: _jsx("p", { className: "loading-message", children: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..." }), children: _jsx(MessageComponent, { messagePromise: fetchMessage() }) })] }));
};
export default App;
