import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Radium from 'radium';
import radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

// @Radium
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

const mapStateToProps = (state) => state;
const raduimDecorator = radium()(Tab);
const reduxAndraduimDecorator = connect(mapStateToProps)(raduimDecorator);

export {Tab, raduimDecorator, reduxAndraduimDecorator};
export default reduxAndraduimDecorator;
