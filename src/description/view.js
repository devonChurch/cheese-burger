import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import style from './style';

@Radium
class Description extends Component {

	render() {

		const {color, description, index} = this.props;
		const s = style({color});
		const active = this.props.activeTab === index;

		return (

			<div style={s.base}>
				<div>
					<p>{description}</p>
				</div>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Description);
