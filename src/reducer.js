const {ACTIVATE_TAB, IS_MOBILE} = require('./actions');
const defaultState = require('./state');

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

        case ACTIVATE_TAB:
			return {
				...state,
				activeTab: action.data
			};

		default:
			return state;

	}

};

module.exports = reducer;
