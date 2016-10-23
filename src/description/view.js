import React, {Component, PropTypes} from 'react';
import radium from 'radium';
import style from './style';
import Image from '../image/view';

class Description extends Component {

	calculateContentHeight() {

		const {content} = this.refs;
		const height = content ? content.offsetHeight : false;

		return height;

	}

	render() {

		const {color, image, heading, description, callToAction, settings} = this.props.description; // eslint-disable-line react/prop-types
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

Description.proptypes = {
	description: PropTypes.shape({
		color: PropTypes.string,
		image: PropTypes.object.isRequired,
		heading: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		callToAction: PropTypes.string.isRequired,
		settings: PropTypes.object.isRequired
	})
}

const withRaduimDecorator = radium()(Description);

export {Description, withRaduimDecorator};
export default withRaduimDecorator;
