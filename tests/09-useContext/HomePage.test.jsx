import { render, screen } from '@testing-library/react';

import HomePage from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('<HomePage /> tests', () => {
    
    const user = {
        id: 17,
        name: 'Fernando',
        email: 'fernando@test.com'
    };
    
    test('should render the component without an user', () => {

        render(
            <UserContext.Provider
                value={{ user: null }}
            >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('should render the component with an user', () => {

        render(
            <UserContext.Provider
                value={{ user }}
            >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.email );
    });
});