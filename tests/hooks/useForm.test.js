import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('useForm tests', () => { 

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@test.com'
    };

    test('should return default values', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('should change the value of the name field', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newName = 'Fer';

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
    });

    test('should reset the form', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const newName = 'Fer';

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

});