import useCounter from '../hooks/useCounter';

const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: { counter }</h1>

            <hr />

            <button 
                className="btn btn-primary"
                // onClick={ decrement }
                // onClick={ (event) => decrement(event) }
                onClick={ () => decrement(2) }
            >-1</button>

            <button 
                className="btn btn-primary"
                onClick={ reset }
            >Reset</button>

            <button 
                className="btn btn-primary"
                // onClick={ increment }
                // onClick={ (event) => increment(event) }
                onClick={ () => increment(2) }
            >+1</button>
        </>
    );
};

export default CounterWithCustomHook;