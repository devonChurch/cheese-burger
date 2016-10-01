const React = require('react');
const {Component} = React;
const {render} = require('react-dom');
const {createStore} = require('redux');
const {Provider} = require('react-redux');
const reducer = require('./reducer');
const state = require('./state');
const props = require('./props');
const Scaffold = require('./scaffold');
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
