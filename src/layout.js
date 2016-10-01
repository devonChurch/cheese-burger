let

	currentMobileReference = true;

const

	mobileBreakpoint = 500,

	findMobileReference = () => window.innerWidth < mobileBreakpoint,

	hasTheLayoutChanged = () => currentMobileReference !== findMobileReference(),

	registeredComponents = [],

	registerComponentToUpdate = (Component) => registeredComponents.push(Component),

	updateRegisteredComponents = () => registeredComponents.map((update) => update()),

	onWindowResize = () => {

		if (hasTheLayoutChanged()) {

			currentMobileReference = !currentMobileReference;
			updateRegisteredComponents();

		}

	},

	listeners = () => window.addEventListener('resize', () => onWindowResize());

currentMobileReference = findMobileReference();
listeners();

module.exports = {

	get mobile() { return currentMobileReference; },
	register(Component) { registerComponentToUpdate(Component); }

};
