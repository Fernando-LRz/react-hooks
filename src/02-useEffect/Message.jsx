import { useEffect, useState } from 'react';

const Message = () => {

    const [ coords, setCoords ] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // console.log('Message mounted');
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener( 'mousemove', onMouseMove );
    
      return () => {
        // console.log('Message unmounted');
        window.removeEventListener( 'mousemove', onMouseMove );
      }

    }, []);
    
    return (
        <>
            <h3>El usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    );
};

export default Message;