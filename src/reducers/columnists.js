export default (state = {}, action) => {
    switch(action.type){
        case "ADD_COLUMNIST": 
            return [
                ...state,
                action.columnist
            ];
        case "EDIT_COLUMNIST": //Pendiente de implementar
            return state.map((columnist) => {
                if(columnist.nick === action.nick){
                    return {...columnist, ...action.updates};
                } else {
                    return columnist;
                }
            });
        case "REMOVE_COLUMNIST":
            return state.filter((columnist) => action.nick != columnist.nick);
        case "SET_COLUMNISTS":
            return action.columnists;
        default: 
            return state;
    };
};