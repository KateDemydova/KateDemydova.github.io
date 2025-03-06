import ControlledForm from "./components/ControlledForm";
import './App.css'
import UncontrolledForm from "./components/UncontrolledForm";
import PostsList from "./components/PostsList";


function App() {
    return (
        <div className="container">
            <h1>Мій контрольований компонент</h1>
            <ControlledForm />
            <UncontrolledForm />
            <PostsList />
        </div>
    );
}

export default App;
