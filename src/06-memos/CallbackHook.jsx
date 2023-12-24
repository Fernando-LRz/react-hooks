import { useState, useCallback } from 'react';
import { ShowIncrement } from '../components';

const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

    const incrementCounter = useCallback(
        (value) => {
            setCounter((c) => c + value);
        }, 
        [],
    );

    // const incrementCounter = () => {
    //     setCounter(counter + 5);
    // };
    
    return (
        <>        
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementCounter } />
        </>
    );
};

export default CallbackHook;