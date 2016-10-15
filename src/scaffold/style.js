import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';

function styles() {

	const base = {
		background: 'white',
		border: '1px solid black',
		margin: '3rem auto',
		maxWidth: '90%',
		width: '57rem',

		[desktopAndUp]: {
			display: 'flex',
		}
	};

	const tabs = {

		[desktopAndUp]: {
			background: 'gray',
			borderRight: '1px solid black',
			width: '20rem',
		}
	};

	const descriptions = {

		[desktopAndUp]: {
			flexGrow: 1,
			position: 'relative',
			width: '100%',
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
