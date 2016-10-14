import {keyframes} from 'radium';
import {desktopAndUp, underDesktop, isMobile} from '../util/breakpoint';

function styles({
	show = false,
	hide = true,
	contentHeight,
	color = 'black'
} = {}) {

	const contentAnimation = (() => {

		const

			showKeyframes = isMobile() ?
				{
					'0%': {height: 0},
					'99%': {height: contentHeight},
					'100%': {height: 'auto'},
				} : {
					'0%': {opacity: 0},
					'100%': {opacity: 100},
				},

			hideKeyframes = isMobile() ?
				{
					'0%': {height: contentHeight || 0},
					'100%': {height: 0},
				} : {
					'0%': {opacity: 100},
					'100%': {opacity: 0},
				},

			animationName = () => {

				if (show) return keyframes(showKeyframes);
				else if (hide) return keyframes(hideKeyframes);

				return 'none';

			},

			transitionSpeed = () => {

				return isMobile() ? '0.2s' : '0.5s';

			},

			contentIndex = () => {

				if (show) return 2;
				else if (hide) return 1;

				return 0;

			};

		return {animationName, transitionSpeed, contentIndex};

	})();

	const base = {
		animation: `xxx ${contentAnimation.transitionSpeed()} ease forwards`,
		animationName: contentAnimation.animationName(),
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
			zIndex: contentAnimation.contentIndex(),
		}

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
