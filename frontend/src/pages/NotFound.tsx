import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div style={{textAlign: 'center', padding: '2rem'}}>
            <h1>404 - Сторінку не знайдено</h1>
            <p>Можливо, ви ввели неправильну адресу або така сторінка не існує.</p>
            <Link to="/" style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '10px 20px',
                backgroundColor: '#ccc',
                borderRadius: '5px',
                textDecoration: 'none'
            }}>
                На головну
            </Link>
        </div>
    );
}