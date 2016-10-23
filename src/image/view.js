import React, {Component, PropTypes} from 'react';
import radium from 'radium';
import style from './style';

class Image extends Component {

	render() {

		const {directory, name, extension, altText, height, width} = this.props.image; // eslint-disable-line react/prop-types
        const src = `${directory}/${name}.${extension}`;
        const srcset = `${directory}/${name}-2x.${extension} 2x`;
		const s = style({height, width});

		return (

			<img style={s.base} src={src} srcSet={srcset} alt={altText}></img>

		);

	}

}

Image.proptype = {
	directory: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	extension: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	height: PropTypes.string,
	width: PropTypes.string
}

const withRaduimDecorator = radium()(Image);

export {Image, withRaduimDecorator};
export default withRaduimDecorator;
