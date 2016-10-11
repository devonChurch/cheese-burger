import React, {Component} from 'react';
import Radium from 'radium';
import style from './style';

@Radium
class Description extends Component {

	render() {

		const {color, description} = this.props;
		const s = style({color});

		// console.log('color, description', color, description);
		console.log('description s', s);

		return (

			<div style={s.base}>
				<p>{description}</p>
			</div>

		);

	}

}

export default Description;
