import * as React from 'react';
import Box from '@mui/material/Box';
import CardItem from './CardItem';

const cards = [
    { id: 1, title: 'Plants', description: 'Plants are essential for all life.' },
    { id: 2, title: 'Animals', description: 'Animals are a part of nature.' },
    { id: 3, title: 'Humans', description: 'Humans depend on plants and animals for survival.' },
];

function SelectActionCard() {
    const [selectedCard, setSelectedCard] = React.useState(0);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                    gap: 4,
                }}
            >
                {cards.map((card, index) => (
                    <CardItem
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        isSelected={selectedCard === index}
                        onClick={() => setSelectedCard(index)}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default SelectActionCard;
