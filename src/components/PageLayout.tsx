import Box from '@mui/material/Box';
import { ReactNode } from 'react';

const PageLayout = ({ children }: { children: ReactNode }) => (
    <Box
        sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            px: 2,
            py: 4,
        }}
    >
        {children}
    </Box>
);


export default PageLayout;
