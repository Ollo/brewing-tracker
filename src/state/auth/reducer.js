import { AUTHED_USER_FETCHING, AUTHED_USER_SAVE, AUTHED_USER_ERROR, AUTHED_USER_DELETE } from './actions'

const initialState = {
	user: {},
	loggedIn: false,
	error: null,
	fetching: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHED_USER_FETCHING:
			return {
				...state,
				fetching: true,
			}
		case AUTHED_USER_SAVE:
			return {
				...state,
				user: action.payload.user,
				fetching: false,
				loggedIn: true,
			}
		case AUTHED_USER_ERROR:
			return {
				...state,
				error: action.payload.error,
				fetching: false,
			}
		case AUTHED_USER_DELETE:
			return {
				...state,
				user: {},
				loggedIn: false,
			}
		default:
			return state
	}
}

export default authReducer