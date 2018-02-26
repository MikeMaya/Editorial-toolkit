export default (state = {}, action) => {
    switch(action.type){
        case "ADD_COLUMNIST": 
            return [
                ...state,
                action.columnist
            ];
        case "EDIT_COLUMNIST": //Pendiente de implementar
            return state.map((columnist) => {
                if(columnist.id === action.id){
                    return {...columnist, ...action.updates};
                } else {
                    return columnist;
                }
            });
        case "REMOVE_COLUMNIST":
            return state.filter((columnist) => action.id != columnist.id);
        default: 
            return state;
    };
};