import './App.css';
import Layout from './Layout/Layout.tsx';
import ClientList from './pages/ClientList.tsx';
import AddClientForm from './pages/AddClientForm.tsx';
import EditClientForm from './pages/EditClientForm.tsx';
import PaymentPage from './pages/PaymentPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ClientList />} />
                    <Route path="addclient" element={<AddClientForm />} />
                    <Route path="payments" element={<PaymentPage />} />
                    <Route path="clients/:id/edit" element={<EditClientForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
