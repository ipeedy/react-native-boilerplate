import {
	LANGUAGE_CHANGE,
  } from './types';

function changeLanguage(language) {
	console.log("ACTION: CHANGE LANGUAGE TO: " + language);
	return {
	  type: LANGUAGE_CHANGE
	}
  }
export {changeLanguage}
