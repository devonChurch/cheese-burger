import React, {Component} from 'react';
import * as svg from './svg';

class Icon extends Component {

	render() {

		const {icon} = this.props;

		return (

			<svg viewBox="0 0 18 18">
				{svg[icon]()}
            </svg>

		);

	}

}

export default Icon;
