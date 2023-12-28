
const initialState = [{
    id: 1,
    todo: 'Task 1',
    done: false
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Task 2',
    done: false
};

const addTodo = {
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer(todos, addTodo);
console.log(todos);
