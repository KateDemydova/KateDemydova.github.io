import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuAppBar from './MenuAppBar';
import Footer from './Footer';

const Layout = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >
        <MenuAppBar />
        <Toolbar />

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Outlet />
        </Box>

        <Footer />
    </Box>
);

export default Layout;
