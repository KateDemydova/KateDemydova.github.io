import React, { Suspense } from "react";
import MessageComponent from "./components/MessageComponent";
import LoginForm from "./components/LoginForm";

const fetchMessage = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Дані завантажено!')
        }, 2000);
    });
};

const App: React.FC = () => {
    return (
        <div className="app-container">
            <LoginForm />

            <h1 className="app-title">Message Component</h1>
            <Suspense fallback={<p className="loading-message">Завантаження...</p>}>
                <MessageComponent messagePromise={fetchMessage()} />
            </Suspense>

        </div>
    );
};

export default App;
