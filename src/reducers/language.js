import {
	LANGUAGE_CHANGE,
  } from '../actions/types';

  const INITIAL_STATE = {
	language: 'en',
  };

  const Language = (state = INITIAL_STATE, action) => {
	  console.log("LANG REDUCER: SWTICH, args: STATE:",state," ACTION:",action);
	switch (action.type) {
	  case LANGUAGE_CHANGE:
	  console.log("LANG REDUCER: LANGUAGE CHANGE")
		return Object.assign({}, state, {
			language: action.langauge,
		  })
	  default:
	  console.log("LANG REDUCER: Don't know how to handle: '" + action.type + "'");
		return state;
	}
  }
  export default Language;
