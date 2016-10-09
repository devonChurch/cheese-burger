let

	currentMobileReference = true;

const

	mobileBreakpoint = 500,

	registeredComponents = [],

	findMobileReference = () => {

		return window.innerWidth < mobileBreakpoint;

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
