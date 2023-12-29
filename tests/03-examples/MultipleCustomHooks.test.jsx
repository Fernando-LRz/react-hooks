import { fireEvent, render, screen } from '@testing-library/react';

import MultipleCustomHooks from '../../src/03-examples/MultipleCustomHooks';

import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooks/> tests', () => {
    
    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should render the component by default', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));
        
        const nextButton = screen.getByRole('button', { name: 'Load new quotes' });
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('should render a Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText('Hello World') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Load new quotes' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('should execute the increment function', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        
        const nextButton = screen.getByRole('button', { name: 'Load new quotes' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    });

});