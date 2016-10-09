import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import state from './state';
import props from './props';
import Scaffold from './scaffold';
const cheeseBurger = document.getElementById('cheese-burger');

function renderMe(store) {

	render(
		<Provider store={store}>
			<Scaffold content={props}/>
		</Provider>,
		cheeseBurger
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

const store = createStore(
	reducer,
	state,
	devTools()
);

// Render on state change.
store.subscribe(() => renderMe(store));

// Prompt initial render on page load.
renderMe(store);
