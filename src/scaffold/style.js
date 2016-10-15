import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';

function styles() {

	const base = {
		background: 'white',
		border: '1px solid black',

		[desktopAndUp]: {
			display: 'flex',
		}
	};

	const tabs = {

		[desktopAndUp]: {
			background: 'gray',
			width: '10rem',
		}
	};

	const descriptions = {

		[desktopAndUp]: {
			flexGrow: 1,
			position: 'relative',
		}
	};

	// const mobile = {
	//
	// };
	//
	// const desktop = {
	//
	// 	base: {
	// 		border: '1px solid black',
	// 		display: 'flex',
	// 	},
	//
	//
	//
	// };

	return {base, tabs, descriptions};

}

export default styles;
