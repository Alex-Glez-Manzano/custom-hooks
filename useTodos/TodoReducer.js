export const todoReducer = (initialState =[], action)=>{
    switch (action.type) {
     
        case '[TODO] Add Todo':
            // throw new Error('Action.type = ABC no esta implementada');
            // No uses push
            return [ ...initialState, action.payload ]
        case '[TODO] Remove Todo':
            // {type: [todo remove], payload: id}
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            // throw new Error('Action.type = ABC no esta implementada');
            // No uses push
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}
