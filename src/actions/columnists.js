const uuid = require('uuid/v1');
import database from '../firebase/firebase.js';

export const addColumnist = (columnist) => ({
    type: "ADD_COLUMNIST",
    columnist
});

export const startAddColumnist = (columnistData = {}) => {
    return (dispatch, getState) => {
        const eid = getState().auth.uid;
        const {
            name = "",
            nick = "",
            email = "", 
            telephone = "",
            amount = 0,
            noColumns = 0,
            notes = {},
            payments = {}
        } = columnistData;

        const columnist = {name, nick, email, telephone, amount, noColumns, notes, payments};

        return database.ref(`editors/${eid}/${nick}`).set(columnist).then((ref) => {
            dispatch(addColumnist({
                nick,
                ...columnist
            }));
        });
    };
};

export const editColumnist = (nick, updates) => ({
    type: "EDIT_COLUMNIST",
    nick,
    updates
});

export const startEditColumnist = (nick, updates) => {
    return (dispatch, getState) => {
        const eid = getState().auth.uid;
        return database.ref(`editors/${eid}/${nick}`).update(updates).then(() => {
            dispatch(editColumnist(nick, updates));
        });
    }
};

export const removeColumnist = (nick) => ({
    type: "REMOVE_COLUMNIST",
    nick
});

export const startRemoveColumnist = (nick) => {
    return (dispatch, getState) => {
        const eid = getState().auth.uid;
        return database.ref(`editors/${eid}/${nick}`).remove().then(() => {
            dispatch(removeColumnist(nick));
        });
    };
}


export const setColumnists = (columnists) => ({
    type: "SET_COLUMNISTS",
    columnists
});

export const startSetColumnists = () => {
    return (dispatch, getState) => {
        const columnists = [];
        const eid = getState().auth.uid;

        return database.ref(`editors/${eid}`).once('value').then((snapshot) => {
            snapshot.forEach((child) => {
                columnists.push({
                    nick: child.key,
                    name: child.val().name,
                    noColumns: child.val().noColumns,
                    amount: child.val().amount
                })
            });
            dispatch(setColumnists(columnists));
        });
    };
};