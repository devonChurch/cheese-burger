import {keyframes} from 'radium';
import {desktopAndUp, underDesktop, isMobile, isDesktop} from '../util/breakpoint';

function styles({
	show = false,
	hide = true,
	contentHeight,
	color = 'black'
} = {}) {

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

				if (show) return keyframes(showKeyframes);
				else if (hide) return keyframes(hideKeyframes);

				return 'none';

			},

			animationParameters = () => 'xxx 200ms ease forwards';

		return {animationName, animationParameters};

	};

	const desktopAnimation = () => {

		const

			showKeyframes = isThisComponentViewNew ? {
				'0%': {height: 0, opacity: 0, zIndex: 1},
				'50%': {height: 0, opacity: 0, zIndex: 1},
				'51%': {height: 'auto', opacity: 0, zIndex: 2},
				'100%': {height: 'auto', opacity: 1, zIndex: 2},
			} : {
				'0%, 100%': {height: 'auto', opacity: 1, zIndex: 2},
			},

			hideKeyframes = isThisComponentViewNew ? {
				'0%': {height: 'auto', opacity: 1, zIndex: 2},
				'50%': {height: 'auto', opacity: 0, zIndex: 2},
				'51%': {height: 0, opacity: 0, zIndex: 1},
				'100%': {height: 0, opacity: 0, zIndex: 1},
			} : {
				'0%, 100%': {height: 0, opacity: 0, zIndex: 1},
			},

			animationName = () => {

				if (show) return keyframes(showKeyframes);
				else if (hide) return keyframes(hideKeyframes);

				return 'none';

			},

			animationParameters = () => 'xxx 500ms linear forwards';

		return {animationName, animationParameters};

	};

	const contentAnimation = isMobile() ? mobileAnimation() : desktopAnimation();

	const base = {
		animation: contentAnimation.animationParameters(),
		animationName: contentAnimation.animationName(),
		background: 'white',
		height: 0,
		overflow: 'hidden',
	};

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
