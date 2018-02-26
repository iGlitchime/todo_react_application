/** Created by IATS on 18.02.2018.*/


export const addItemTodoAction = (item) => {
    return ( {type: 'ADD_ITEM_TODO', item} )
}

export const removeItemTodoAction = (item) => {
    return ({
        type: 'DELETE_TODO',
        id: item.id
    })
}