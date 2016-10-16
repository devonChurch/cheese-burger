import {keyframes} from 'radium';
import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';
import {spacing, fontSize, masterColor} from '../util/style';

function styles({
	isShowing = false,
	isHiding = false,
	isUnderActive = false,
	isFirstTab = false,
	isLastTab = false,
	contentHeight,
	color = 'black'
} = {}) {

	const customColor = masterColor.createCustomColor(color);

	const isThisComponentViewNew = contentHeight;

	const mobileAnimation = () => {

		const

			showKeyframes = isThisComponentViewNew ? {
				'0%': {height: 0},
				'99%': {height: contentHeight},
				'100%': {height: 'auto'},
			} : {
				'0%, 100%': {height: 'auto'}
			},

			hideKeyframes = isThisComponentViewNew ? {
				'0%': {height: contentHeight},
				'100%': {height: 0},
			} : {
				'0%, 100%': {height: 0}
			},

			animationName = () => {

				if (isShowing) return keyframes(showKeyframes);
				else if (isHiding) return keyframes(hideKeyframes);

				return 'none';

			},

			animationParameters = () => 'xxx 200ms ease forwards';

		return {animationName, animationParameters};

	};

	const desktopAnimation = () => {

		const

			contentOffset = '0.5rem',

			showKeyframes = isThisComponentViewNew ? {
				'0%': {height: 0, opacity: 0, transform: `translateX(-${contentOffset})`, zIndex: 1},
				'50%': {height: 0, opacity: 0, transform: `translateX(-${contentOffset})`, zIndex: 1},
				'51%': {height: 'auto', opacity: 0, transform: `translateX(-${contentOffset})`, zIndex: 2},
				'100%': {height: 'auto', opacity: 1, transform: 'translateX(0)', zIndex: 2},
			} : {
				'0%, 100%': {height: 'auto', opacity: 1, transform: 'translateX(0)', zIndex: 2},
			},

			hideKeyframes = isThisComponentViewNew ? {
				'0%': {height: 'auto', opacity: 1, transform: 'translateX(0)', zIndex: 2},
				'50%': {height: 'auto', opacity: 0, transform: `translateX(${contentOffset})`, zIndex: 2},
				'51%': {height: 0, opacity: 0, transform: `translateX(${contentOffset})`, zIndex: 1},
				'100%': {height: 0, opacity: 0, transform: `translateX(${contentOffset})`, zIndex: 1},
			} : {
				'0%, 100%': {height: 0, opacity: 0, transform: 'translateX(0)', zIndex: 1},
			},

			animationName = () => {

				if (isShowing) return keyframes(showKeyframes);
				else if (isHiding) return keyframes(hideKeyframes);

				return 'none';

			},

			animationParameters = () => 'xxx 500ms linear forwards';

		return {animationName, animationParameters};

	};

	const contentAnimation = isMobile() ? mobileAnimation() : desktopAnimation();

	const base = {
		animation: contentAnimation.animationParameters(),
		animationName: contentAnimation.animationName(),
		height: 0,
		overflow: 'hidden',
	};

	const content = {
		padding: spacing(900),
	};

	const heading = {
		color: customColor(500),
	};

	const description = {
		color: customColor(900),
		margin: 0,
	};

	const callToAction = {
		color: customColor(300),
	};

	return {
		base,
		content,
		heading,
		description,
		callToAction
	};

}

export default styles;
