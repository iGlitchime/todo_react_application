const initialState = [];

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM_TODO':
            return [action.item, ...state];
        case 'REMOVEDELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'DELETE_TODO':
            return state.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
            );
        default:
            return state;
    }
}