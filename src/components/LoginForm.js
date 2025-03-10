import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FakeLogin } from "../utils/FakeLogin";
import './LoginForm.css';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        setPending(true);
        setError(null);
        setResult('');
        try {
            const data = await FakeLogin({ username, password });
            setResult(`${data.username} logged in`);
        }
        catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else
                setError('An unknown error occurred');
        }
        finally {
            setPending(false);
        }
    };
    return (_jsxs("form", { className: "form-container", onSubmit: handleSubmit, children: [_jsxs("div", { className: "group-form", children: [_jsx("input", { value: username, onChange: (e) => setUsername(e.target.value), id: "username", type: "text", placeholder: "Username", autoComplete: "username" }), _jsx("label", { htmlFor: "username", children: "Username" })] }), _jsxs("div", { className: "group-form", children: [_jsx("input", { value: password, onChange: (e) => setPassword(e.target.value), id: "password", type: "password", placeholder: "Password", autoComplete: "new-password" }), _jsx("label", { htmlFor: "password", children: "Password" })] }), _jsx("button", { type: "submit", disabled: pending, children: pending ? "Logging in..." : "Login" }), pending && _jsx("p", { children: "Loading..." }), error && _jsx("p", { style: { color: "red" }, children: error }), result && _jsx("p", { style: { color: "green" }, children: result })] }));
};
export default LoginForm;
