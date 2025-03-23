import { AppProvider } from './context/AppContext';
import ParentComponent from './components/ParentComponent';

function App() {
    return (
        <AppProvider>
            <h1>React App with Context</h1>
            <ParentComponent />
        </AppProvider>
    );
}

export default App;

