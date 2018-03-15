import database from '../firebase/firebase.js';

export const getData = (users) => ({
    type: "GET_DATA",
    users
})
export const startGetData = () => {
    return (dispatch) => {
        let users = [];
        return database.ref(`users`).once('value').then((snapshot) => { 
            snapshot.forEach((user) => {            
                users.push({
                    id: user.key,
                    nick: user.val().nick
                })
            })
            dispatch(getData(users))
        });    
    }
};