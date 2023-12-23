import { useState } from 'react';

const CounterApp = () => {

    const [ state, setState ] = useState({
        counter1: 3,
        counter2: 6,
        counter3: 9
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter: { counter1 }</h1>
            <h1>Counter: { counter2 }</h1>
            <h1>Counter: { counter3 }</h1>

            <hr />

            <button
                className="btn"
                onClick={ 
                    () => setState(
                        {
                            ...state,
                            counter1: counter1 + 1
                        }
                    ) 
                }
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;

