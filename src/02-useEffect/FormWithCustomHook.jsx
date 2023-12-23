import useForm from '../hooks/useForm';

const FormWithCustomHook = () => {

    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    }); 

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                className='btn btn-primary mt-2'
                onClick={ onResetForm }
            >
                Resetear
            </button>

        </>
    );
};

export default FormWithCustomHook;