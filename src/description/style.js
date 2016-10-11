import {desktopAndUp} from '../util/breakpoint';

function styles({
	color = 'black'
} = {}) {

	return {

		base: {
			background: 'white',
			border: `1px solid ${color}`,

			[desktopAndUp]: {
				height: '100%',
				left: 0,
				position: 'absolute',
				width: '100%',
			}
		},

	};

}

export default styles;
