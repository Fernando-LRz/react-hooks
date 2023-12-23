import { useState, useEffect } from 'react';
import Message from './Message';

const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'fernando_lr',
        email: 'fernando.lr@email.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('Component loaded');
    }, []);

    useEffect(() => {
        // console.log('Form changed!');
    }, [ formState ]);

    useEffect(() => {
        // console.log('Email changed!');
    }, [ email ]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            {
                username === 'fernando_lr' &&  <Message />
            }

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

        </>
    );
};

export default SimpleForm;