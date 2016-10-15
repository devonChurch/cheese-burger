import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';

function styles({
	color = 'white',
	isShowing = false,
	isHiding = false,
	isUnderActive = false,
	isFirstTab = false,
	isLastTab = false
} = {}) {

	const base = {
		background: isShowing ? 'white' : 'gray',
		display: 'flex',
		padding: '1rem 0.5rem',
		textAlign: 'left',
		transitionDuration: '250ms',
		transitionProperty: 'background, border',
		width: '100%',

		[underDesktop]: {
			borderBottom: !isShowing && isLastTab ? '0' : '1px solid black',
			borderLeft: isShowing ? `0.5rem solid ${color}` : '0',
			borderRight: '0',
			borderTop: isUnderActive ? '1px solid black' : '0',
		},

		[desktopAndUp]: {
			borderBottom: isShowing ? '1px solid black' : '1px solid transparent',
			borderLeft: isShowing ? `0.5rem solid ${color}` : '0',
			borderRight: '0',
			borderTop: isShowing && !isFirstTab ? '1px solid black' : '1px solid transparent',
			width: isShowing ? 'calc(100% + 1px)' : '100%',
		},

	};

	return {base};

}

export default styles;
