import React, {Component} from 'react';
import style from './style';
import * as svg from '../svg';

class Icon extends Component {

	render() {

		const {icon} = this.props;
		const iconSize = '1.5rem';
		const s = style({
			height: iconSize,
			width: iconSize
		});

		return (

			<svg style={s.base} viewBox="0 0 18 18">
				{svg[icon]()}
            </svg>

		);

	}

}

export default Icon;
