import { FormEvent, useState } from "react";
import { FakeLogin } from "../utils/FakeLogin";
import './LoginForm.css'


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState('');

    const handleSubmit = async ( event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setPending(true);
        setError(null);
        setResult('');

        try {
            const data = await FakeLogin({ username, password });
            setResult(`${data.username} logged in`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
            } else
                setError('An unknown error occurred')
        } finally {
            setPending(false);
        }
    }

    return (
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="group-form">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                    />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="group-form">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit" disabled={pending}>
                    {pending ? "Logging in..." : "Login"}
                </button>

                {pending && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {result && <p style={{ color: "green" }}>{result}</p>}
            </form>
    );
}

export default LoginForm;