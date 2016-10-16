import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import style from './style';
import Image from '../image/view';

@Radium
class Description extends Component {

	calculateContentHeight() {

		const {content} = this.refs;
		const height = content ? content.offsetHeight : false;

		return height;

	}

	render() {

		const {color, image, heading, description, callToAction, settings} = this.props.description;
		const contentHeight = this.calculateContentHeight();
		const s = style({...settings, contentHeight, color});

		return (

			<div style={s.base}>
				<div style={s.content} ref="content">
					<span style={s.image}>
						<Image image={image}/>
					</span>
					<h2 style={s.heading}>{heading}</h2>
					<p style={s.description}>{description}</p>
					<a style={s.callToAction} href={callToAction.url} target="_blank">{callToAction.text}</a>
				</div>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Description);
