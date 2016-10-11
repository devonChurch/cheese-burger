import * as breakpoint from './util/breakpoint';

let

	currentMobileReference = true;

const

	registeredComponents = [],

	findMobileReference = () => {

		return window.innerWidth < breakpoint.desktop;

	},

	hasTheLayoutChanged = () => {

		return currentMobileReference !== findMobileReference();

	},

	registerComponentToUpdate = (Component) => {

		registeredComponents.push(Component);

	},

	updateRegisteredComponents = () => {

		registeredComponents.map((update) => update());

	},

	onWindowResize = () => {

		if (hasTheLayoutChanged()) {

			currentMobileReference = !currentMobileReference;
			updateRegisteredComponents();

		}

	},

	listeners = () => {

		window.addEventListener('resize', () => onWindowResize());

	},

	init = (() => {

		currentMobileReference = findMobileReference();
		listeners();

	})();

export default {

	get mobile() { return currentMobileReference; },
	register(Component) { registerComponentToUpdate(Component); }

};
