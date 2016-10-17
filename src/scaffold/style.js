import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../helpers/breakpoint';
import {spacing, fontSize, masterColor} from '../helpers/style';
const {gray} = masterColor;

function styles() {

	const base = {
		background: 'white',
		border: `1px solid ${gray(500)}`,
		margin: '3rem auto',
		maxWidth: '90%',
		width: '57rem',

		[desktopAndUp]: {
			display: 'flex',
		}
	};

	const tabs = {

		[desktopAndUp]: {
			background: gray(100),
			borderRight: `1px solid ${gray(500)}`,
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

	return {base, tabs, descriptions};

}

export default styles;
