import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MainApp from '../../src/09-useContext/MainApp';

describe('<MainApp /> tests', () => {
    
    test('should render the HomePage component', () => {
        
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('should render the LoginPage component', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });

    test('should render the AboutPage component', () => {
        
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();
    });
    
});