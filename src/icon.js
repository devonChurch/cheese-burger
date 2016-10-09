// const React = require('react');
// const {Component} = React;

import React, {Component} from 'react';
import svg from './svg';

class Icon extends Component {

	render() {

		console.log('ICON this.props', this.props);

		const {icon} = this.props;

		return (

			<svg viewBox="0 0 18 18">
				{svg[icon]()}
            </svg>

		);

	}

}

// module.exports = Icon;
export default Icon;
