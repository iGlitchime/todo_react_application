const initialState = [];

export function todoReducer(state = initialState, action) {
    // action.item: Object<id, text>
    switch (action.type) {
        case 'ADD_ITEM_TODO':
            return [action.item, ...state];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}