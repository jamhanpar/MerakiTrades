import * as SessionAPIUtil  from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const resetErrors = () => ({
    type: RESET_ERRORS
})

export const signup = formUser => dispatch => (
    SessionAPIUtil.signup(formUser)
        .then(
            user => (dispatch(receiveCurrentUser(user))), 
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
);

export const login = formUser => dispatch => ( 
    SessionAPIUtil.login(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(
            () => dispatch(logoutCurrentUser())
        )
);

export const reset = () => dispatch => (
    dispatch(resetErrors())
);