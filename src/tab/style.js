import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';
import {spacing, speed, fontFamily, fontSize, fontWeight, masterColor} from '../util/style';
const {gray} = masterColor;

function styles({
	color = gray(500),
	isShowing = false,
	isHiding = false,
	isUnderActive = false,
	isFirstTab = false,
	isLastTab = false
} = {}) {

	const customColor = masterColor.createCustomColor(color);

	const base = {
		alignItems: 'center',
		background: isShowing ? 'white' : gray(100),
		display: 'flex',
		padding: '1rem 0.5rem',
		textAlign: 'left',
		transitionDuration: `${speed(200)}ms`,
		transitionProperty: 'background, border',
		width: '100%',

		[underDesktop]: {
			borderBottom: !isShowing && isLastTab ? '0' : `1px solid ${gray(500)}`,
			borderLeft: isShowing ? `0.5rem solid ${color}` : '0',
			borderRight: '0',
			borderTop: isUnderActive ? `1px solid ${gray(500)}` : '0',
		},

		[desktopAndUp]: {
			borderBottom: isShowing ? `1px solid ${gray(500)}` : '1px solid transparent',
			borderLeft: isShowing ? `0.5rem solid ${color}` : '0',
			borderRight: '0',
			borderTop: isShowing && !isFirstTab ? `1px solid ${gray(500)}` : '1px solid transparent',
			width: isShowing ? 'calc(100% + 1px)' : '100%',
		},

	};

	const text = {
		color: isShowing ? customColor(500) : gray(500),
		fontSize: fontSize(400),
		fontWeight: fontWeight(700),
	};

	const icon = {
		padding: `0 ${spacing(500)} 0 ${spacing(300)}`,
	};

	return {base, text, icon};

}

export default styles;
