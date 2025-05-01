import "./App.css";
import TodoList from "./components/TodoList";
import MyButtonCount from "./components/MyButtonCount";

function App() {
    return (
        <div className="app-layout">
            <div className="column">
                <TodoList />
            </div>
            <div className="column">
                <MyButtonCount />
            </div>
        </div>
    );
}

export default App;
