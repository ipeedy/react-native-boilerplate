import {
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
};

 const Auth = (state = INITIAL_STATE, action) => {
	console.log("AUTH REDUCER");
  switch (action.type) {
		case AUTH_SUCCESS:
		console.log("AUTH SUCCESS");
      return state;
		case AUTH_FAIL:
		console.log("AUTH FAIL");
      return state;
		default:
		console.log("AUTH DEFAULT");
      return state;
  }
}
export default Auth;
