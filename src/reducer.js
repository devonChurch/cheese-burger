import {IS_MOBILE, SHOW_TAB, HIDE_TAB} from './actions';
import * as defaultState from './state';

const reducer = (state = defaultState, action) => {

	// deepFreeze(state);
	//
	// _debug('Questions:', 'action', action);

    // console.log('REDUCER', action.type, action.data);

	switch (action.type) {

		case IS_MOBILE:
			return {
				...state,
				isMobile: action.data
			};

        case SHOW_TAB:
			return {
				...state,
				showTab: action.data
			};

		case HIDE_TAB:
			return {
				...state,
				hideTab: action.data
			};

		default:
			return state;

	}

};

export default reducer;
