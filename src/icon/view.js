import React, {Component, PropTypes} from 'react';
import radium from 'radium';
import style from './style';
import * as svg from './svg';

class Icon extends Component {

	render() {

		const {type, color, size} = this.props.icon; // eslint-disable-line react/prop-types
		const s = style({
			color,
			height: size,
			width: size
		});

		return (

			<svg style={s.base} viewBox="0 0 18 18">
				{svg[type]()}
            </svg>

		);

	}

}

Icon.proptypes = {
	icon: PropTypes.shape({
		type: PropTypes.string.isRequired,
		color: PropTypes.string,
		size: PropTypes.string
	})
}

const withRaduimDecorator = radium()(Icon);

export {Icon, withRaduimDecorator};
export default withRaduimDecorator;
