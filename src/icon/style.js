import {speed} from '../helpers/style';

function styles({
	color = 'black',
	height = '2rem',
	width = '2rem',
} = {}) {

	return {

		base: {
			fill: color,
			height,
			transition: `fill ${speed(200)}ms`,
			width,
		},

	};

}

export default styles;
