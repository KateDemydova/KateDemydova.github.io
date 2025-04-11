import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
export interface CardItemProps {
    id: number;
    title: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
}

const CardItem = ({ id, title, description, isSelected, onClick }: CardItemProps) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: 300, md: 350, lg: 400 } }}>
            <CardActionArea
                onClick={onClick}
                data-active={isSelected ? '' : undefined}
                sx={{
                    '&[data-active]': {
                        backgroundColor: 'action.selected',
                        '&:hover': {
                            backgroundColor: 'action.selectedHover',
                        },
                    },
                }}
            >
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                    variant="outlined"
                    size="small"
                    component={RouterLink}
                    to={`/category/${id}`}
                >
                    Дізнатись більше
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardItem;
