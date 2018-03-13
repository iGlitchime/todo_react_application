const initialState = [];
//const ToDoId = 0;
export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM_TODO':
            return [action.item, ...state];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'DELETE_TODO':
            return state.map(todo =>
                    (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state;
    }
}