import { render, screen } from '@testing-library/react';

import TodoApp from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('<TodoApp /> tests', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'task 1', done: false },
            { id: 2, description: 'task 2', done: true }
        ], 
        handleNewTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        todosCount: 2, 
        pendingTodosCount: 1
    });

    test('should render the component correctly', () => {
        
        render( <TodoApp /> );
        
        expect( screen.getByText('task 1') ).toBeTruthy();
        expect( screen.getByText('task 2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    });
});