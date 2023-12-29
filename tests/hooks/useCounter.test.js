import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter tests', () => {

    const counterInitializer = 100;

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('should initialize the counter with a value of 100', () => {
        
        const { result } = renderHook(() => useCounter(counterInitializer));
        const { counter } = result.current;

        expect( counter ).toBe(counterInitializer);
    });

    test('should increment the counter', () => {
        
        const { result } = renderHook(() => useCounter(counterInitializer));
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(counterInitializer + 3);
    });

    test('should decrement the counter', () => {
        
        const { result } = renderHook(() => useCounter(counterInitializer));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(counterInitializer - 3);
    });

    test('should reset the counter', () => {
        
        const { result } = renderHook(() => useCounter(counterInitializer));
        const { increment, reset } = result.current;

        act(() => {
            increment(3);
            reset();
        });

        expect(result.current.counter).toBe(counterInitializer);
    });

});