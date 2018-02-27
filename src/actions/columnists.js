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
            amount = 0,
            noColumns = 0
        } = columnistData;

        const columnist = {name, nick, amount, noColumns};

        database.ref(`columnist`).push(columnist).then((ref) => {
            const cid = ref.key;

            return database.ref(`editors/${eid}`).set(cid).then(() => {
                dispatch(addColumnist({
                    id: cid,
                    ...columnist
                }));
            });
        });
    };
};

export const editColumnist = (id, updates) => ({
    type: "EDIT_COLUMNIST",
    id,
    updates
});

export const removeColumnist = (id) => ({
    type: "REMOVE_COLUMNIST",
    id
});