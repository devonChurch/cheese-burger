import React, {Component} from 'react';
import radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

class Tab extends Component {

	render() {

		const {icon, text, color, settings, showTabCallback} = this.props.tab;
		const s = styles({...settings, color});

		return (

			<button className="Button--reset" style={s.base} onClick={showTabCallback} ref="button">
                <span style={s.icon}><Icon icon={{type: icon, color: s.text.color, size: '1.5rem'}}/></span>
                <span style={s.text}>{text}</span>
            </button>

		);

	}

}

const withRaduimDecorator = radium()(Tab);

export {Tab, withRaduimDecorator};
export default withRaduimDecorator;
