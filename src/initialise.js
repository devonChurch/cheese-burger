import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StyleRoot} from 'radium';
import reducer from './state/reducer';
import defaultState from './state/default';
import defaultProps from './props/default';
import Scaffold from './scaffold/view';
const cheeseBurger = document.getElementById('cheese-burger');

function renderMe(store) {

	render(
		<Provider store={store}>
			<StyleRoot>
				<Scaffold content={defaultProps}/>
			</StyleRoot>
		</Provider>,
		cheeseBurger
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

const store = createStore(
	reducer,
	defaultState,
	devTools()
);

// Render on state change.
store.subscribe(() => renderMe(store));

// Prompt initial render on page load.
renderMe(store);
