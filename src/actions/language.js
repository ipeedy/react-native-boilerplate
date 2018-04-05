import {
	LANGUAGE_CHANGE,
  } from './types';

function changeLanguage(language) {
	return {
	  type: LANGUAGE_CHANGE,
	  payload: {language},
	}
  }
export {changeLanguage}
