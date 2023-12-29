import { fireEvent, render, screen } from '@testing-library/react';

import { UserContext } from '../../src/09-useContext/context/UserContext';
import LoginPage from '../../src/09-useContext/LoginPage';

describe('<LoginPage /> tests', () => {

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
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('should execute the authenticate function when clicking the button', () => {
        
        const authenticateMock = jest.fn();
        
        render(
            <UserContext.Provider
                value={{ user, authenticate: authenticateMock }}
            >
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( authenticateMock ).toHaveBeenCalledWith( user );
    });
});