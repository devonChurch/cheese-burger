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

		const {color, heading, description, callToAction, settings} = this.props.description;
		const contentHeight = this.calculateContentHeight();
		const s = style({...settings, contentHeight, color});

		return (

			<div style={s.base}>
				<div style={s.content} ref="content">
					<h2 style={s.heading}>{heading}</h2>
					<p style={s.description}>{description}</p>
					<a style={s.callToAction}>{callToAction}</a>
				</div>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Description);
