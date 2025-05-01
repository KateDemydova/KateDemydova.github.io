import {memo, useCallback, useState} from "react";


type ButtonProps = {
    onClick: () => void;
};

const MyButton = memo(({onClick}: ButtonProps) => {
console.log('Render MyButtonCount:');
return <button onClick={onClick}>Click me</button>
});

const MyButtonCount = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Clicked');
    }, []);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <MyButton onClick={handleClick} />
        </div>
    );
};

export default MyButtonCount;