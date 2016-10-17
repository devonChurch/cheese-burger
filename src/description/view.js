import React, {Component} from 'react';
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

const withRaduimDecorator = radium()(Description);

export {Description, withRaduimDecorator};
export default withRaduimDecorator;
