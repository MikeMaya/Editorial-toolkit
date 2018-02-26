export const addColumnist = (columnist) => ({
    type: "ADD_COLUMNIST",
    columnist
});

export const editColumnist = (id, updates) => ({
    type: "EDIT_COLUMNIST",
    id,
    updates
});

export const removeColumnist = (id) => ({
    type: "REMOVE_COLUMNIST",
    id
});