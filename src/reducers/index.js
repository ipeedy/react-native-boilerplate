import { combineReducers } from 'redux';

import Auth from './auth';
import Language from './language';
import Navigator from './navigation';

export default combineReducers({
	Auth,
	Language,
	Navigator,
});
