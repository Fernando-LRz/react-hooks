import { useCallback, useState } from 'react';
import { Child } from './Child';

const Parent = () => {

    const numbers = [2, 4, 6, 8, 10];
    const [ value, setValue ] = useState(0);

    const increment = useCallback((number) => {
        setValue((oldValue) => oldValue + number);
    }, []);

    // const increment = (number) => {
    //     setValue(value + number);
    // };

    return (
        <div>
            <h1>Parent</h1>
            <p>Total: { value }</p>

            <hr />

            {
                numbers.map((number) => (
                    <Child increment={ increment } number={ number } key={ number }/>
                ))  
            }

        </div>
    );
};

export default Parent;