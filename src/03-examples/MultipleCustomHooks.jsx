import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../components';

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : (

                        data.map((element, index) => {
                            const { quote, author } = element;
                            return <Quote quote={ quote } author={ author } key={ index }/>
                        })
                    )
            }

            <button 
                className='btn btn-primary' 
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Load new quotes
            </button>

        </>
    );
};

export default MultipleCustomHooks;