import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                py: 3,
                px: 2,
                mt: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Приклад з MUI
            </Typography>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Link href="#" underline="hover" color="inherit">
                    Політика конфіденційності
                </Link>
                <Link href="#" underline="hover" color="inherit">
                    Контакти
                </Link>
            </Box>
        </Box>
    );
}

export default Footer;
