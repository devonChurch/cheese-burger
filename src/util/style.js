import modifyColor from 'color';

const createOptionsSet = (options) => {

	return (modifier) => options[modifier] || options[500];

};

const spacing = createOptionsSet({
	100: '0',
	200: '0.25rem',
	300: '0.5rem',
	400: '0.75rem',
	500: '1rem',
	600: '1.25rem',
	700: '1.5rem',
	800: '1.75rem',
	900: '2rem',
});

const speed = createOptionsSet({
	100: 0,
	200: 250,
	300: 500,
	400: 750,
	500: 1000,
	600: 1250,
	700: 1500,
	800: 1750,
	900: 2000,
});

const fontFamily = createOptionsSet({
	500: 'Roboto',
	600: 'Roboto Slab',
});

const fontSize = createOptionsSet({
	100: '0.5rem',
	200: '0.625rem',
	300: '0.75rem',
	400: '0.875rem',
	500: '1rem',
	600: '1.125rem',
	700: '1.375rem',
	800: '1.625rem',
	900: '1.875rem',
});

const fontWeight = createOptionsSet({
	100: '100',
	200: '200',
	300: '300',
	400: '400',
	500: '500',
	600: '600',
	700: '700',
	800: '800',
	900: '900',
});

const masterColor = (() => {

	const

		createCustomColor = (color) => {

			const masterCopy = modifyColor(color);
			const clone = () => masterCopy.clone();
			const options = {
				100: () => clone().lighten(0.4),
				200: () => clone().lighten(0.3),
				300: () => clone().lighten(0.2),
				400: () => clone().lighten(0.1),
				500: () => masterCopy,
				600: () => clone().darken(0.1),
				700: () => clone().darken(0.2),
				800: () => clone().darken(0.3),
				900: () => clone().darken(0.4),
			};

			return (modifier) => options[modifier]().hexString();

		},

		gray = createCustomColor('#9E9E9E'),
		red = createCustomColor('#F44336'),
		green = createCustomColor('#4CAF50'),
		blue = createCustomColor('#2196F3');

	return {createCustomColor, gray, red, green, blue};

})();

export {spacing, speed, fontFamily, fontSize, fontWeight, masterColor};
