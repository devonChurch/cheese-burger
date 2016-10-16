import React, {Component} from 'react';
import Radium from 'radium';
import style from './style';
import * as svg from './svg';

@Radium
class Icon extends Component {

	render() {

		const {type, color, size} = this.props.icon;
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

export default Icon;
