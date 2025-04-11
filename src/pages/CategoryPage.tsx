import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PageLayout from '../components/PageLayout';
import Box from "@mui/material/Box";

const CategoryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
    <PageLayout>
            <Typography variant="h4" gutterBottom>
                Сторінка категорії: {id}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Тут можна вивести додаткову інформацію про категорію.
            </Typography>
            <Button variant="contained" onClick={() => navigate(-1)}>
                Назад
            </Button>
        </PageLayout>
        </Box>
    );
};

export default CategoryPage;
