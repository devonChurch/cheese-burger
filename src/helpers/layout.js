import * as breakpoint from './breakpoint';

const throttle = (() => {

	let

		currentFrames = 0,
		deferredInstance,
		animationInstance;

	const

		maxFrames = 60,

		stopThrottling = () => {

			currentFrames = 0;
			cancelAnimationFrame(animationInstance);
			deferredInstance();

		},

		activateThrottling = () => {

			const continueThrottling = currentFrames < maxFrames;
			const callback = continueThrottling ? activateThrottling : stopThrottling;

			currentFrames += 1;
			animationInstance = requestAnimationFrame(callback);

		},

		addinstance = (instance) => {

			const isThrottling = currentFrames;

			if (isThrottling) {

				activateThrottling();
				deferredInstance = instance;

			} else {

				instance();

			}

		};

	return addinstance;

})();

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

		window.addEventListener('resize', () => throttle(onWindowResize));

	},

	init = () => {

		currentMobileReference = findMobileReference();
		listeners();

	};

init();

export default {

	get mobile() { return currentMobileReference; },
	register(Component) { registerComponentToUpdate(Component); }

};
