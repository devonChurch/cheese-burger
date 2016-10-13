import {keyframes} from 'radium';
import {desktopAndUp, underDesktop} from '../util/breakpoint';

function styles({
	active = false,
	contentHeight,
	color = 'black'
} = {}) {

	const expandContent = keyframes({
		'0%': {height: 0},
		'99%': {height: contentHeight || 'auto'},
		'100%': {height: 'auto'},
	});

	const contractContent = keyframes({
		'0%': {height: contentHeight || 0},
		'100%': {height: 0},
	});

	let base = {
		background: 'white',
		border: `1px solid ${color}`,

		[underDesktop]: {
			height: 0,
			overflow: 'hidden',
		},

		[desktopAndUp]: {
			height: '100%',
			left: 0,
			position: 'absolute',
			width: '100%',
		}
	};

	if (active) {

		base = {...base, ...{
			animation: 'x 1s ease forwards',
			animationName: expandContent,
		}};

	} else {

		base = {...base, ...{
			animation: 'x 1s ease forwards',
			animationName: contractContent,
		}};
	}

	const content = {
		padding: '1rem',
	};

	const description = {
		margin: 0,
	};

	return {
		base,
		content,
		description
	};

}

export default styles;
