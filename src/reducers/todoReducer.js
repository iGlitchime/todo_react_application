

const initialState = [];

export function todoReducer(state = initialState, action){
    // action.item: Object<id, text>
    switch(action.type){
        case 'ADD_ITEM_TODO':
            return  [action.item, ...state];



        case 'REMOVE_ITEM_TODO':
            //достаем объект,
            // по id ищем такой среди имеющихся.
            // удаляем.
            // записываем новый
            return { id: state.id, text: state.text }; //???

        default: return state;
    }
}