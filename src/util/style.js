import modifyColor from 'color';

const spacing = (() => {

	const options = {
		100: '0',
		200: '0.25rem',
		300: '0.5rem',
		400: '0.75rem',
		500: '1rem',
		600: '1.25rem',
		700: '1.5rem',
		800: '1.75rem',
		900: '2rem',
	};

	return (modifier) => options[modifier];

})();

const fontFamily = (() => {

	const options = {
		500: 'Roboto',
		600: 'Roboto Slab',
	};

	return (modifier) => options[modifier] || options[500];

})();

const fontSize = (() => {

	const options = {
		100: '0.5rem',
		200: '0.625rem',
		300: '0.75rem',
		400: '0.875rem',
		500: '1rem',
		600: '1.125rem',
		700: '1.375rem',
		800: '1.625rem',
		900: '1.875rem',
	};

	return (modifier) => options[modifier];

})();

const fontWeight = (() => {

	const options = {
		100: '100',
		200: '200',
		300: '300',
		400: '400',
		500: '500',
		600: '600',
		700: '700',
		800: '800',
		900: '900',
	};

	return (modifier) => options[modifier];

})();

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

		gray = createCustomColor('#9E9E9E');

	return {createCustomColor, gray};

})();

export {spacing, fontFamily, fontSize, fontWeight, masterColor};
