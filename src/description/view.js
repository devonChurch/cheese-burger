import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import style from './style';

@Radium
class Description extends Component {

	calculateContentHeight() {

		const {content} = this.refs;
		const height = content ? content.offsetHeight : false;

		return height;

	}

	render() {

		const {color, description, index} = this.props;
		const active = this.props.activeTab === index;
		const contentHeight = this.calculateContentHeight();
		const s = style({active, contentHeight, color});

		return (

			<div style={s.base}>
				<div style={s.content} ref="content">
					<p style={s.description}>{description}</p>
				</div>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Description);
