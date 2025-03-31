import GrandChildComponent from './GrandChildComponent';

const ChildComponent = () => {
    return (
        <div style={{ paddingLeft: '1rem' }}>
            <h3>Child Component</h3>
            <GrandChildComponent />
        </div>
    );
};

export default ChildComponent;
