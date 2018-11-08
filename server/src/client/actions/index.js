export const FETCH_USERS = 'fetch user';
export const fetchUsers = () => {
    return async (dispatch, getState, api) => {
        const res = await api.get('/users');
        dispatch({ type: FETCH_USERS, payload: res });
    };
};

export const FETCH_CURRENT_USER = 'fetch current user';
export const fetchCurrentUser = () => {
    return async (dispatch, getState, api) => {
        const res = await api.get('/current_user');
        dispatch({ type: FETCH_CURRENT_USER, payload: res });
    }
}


