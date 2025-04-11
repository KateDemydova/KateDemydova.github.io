import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectActionCard from './components/SelectActionCard';
import CategoryPage from './pages/CategoryPage';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<SelectActionCard />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
