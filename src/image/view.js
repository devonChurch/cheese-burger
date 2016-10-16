import React, {Component} from 'react';
import Radium from 'radium';
import style from './style';

@Radium
class Image extends Component {

	render() {

		const {directory, name, extension, altText, height, width} = this.props.image;
        const src = `${directory}/${name}.${extension}`;
        const srcset = `${directory}/${name}-2x.${extension} 2x`;
		const s = style({height, width});

		return (

			<img style={s.base} src={src} srcSet={srcset} alt={altText}></img>

		);

	}

}

export default Image;
