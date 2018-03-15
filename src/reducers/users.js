export default (state = {}, action) => {
    switch(action.type){
        case "GET_DATA":
            return action.users;
        default: 
            return state;
    };
};