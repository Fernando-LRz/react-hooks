import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const LoginPage = () => {

    const { user, authenticate } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify(user, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => authenticate({ id: 17, name: 'Fernando', email: 'fernando@test.com' })}
            >
                Login
            </button>
        </>
    );
};

export default LoginPage;