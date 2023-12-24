import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {

    const pRef = useRef();

    const [ boxSize, setBoxSize ] = useState({
        width: 0, 
        height: 0
    });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, []);

    return (
        <>        
            <blockquote 
                className='blockquote text-end mb-6'
                style={{ display: 'flex' }}
            >
                <p ref={ pRef } className='mb-3'>{ quote }</p>
                <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>

            <code style={{ display: 'block' }} className='mb-4'>{ JSON.stringify(boxSize) }</code>
        </>
    );
};