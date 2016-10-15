import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

@Radium
class Tab extends Component {

	render() {

		const {icon, text, color, settings, showTabCallback} = this.props.tab;
		const s = styles({...settings, color});

		return (

			<button style={s.base} onClick={showTabCallback} ref="button">
                <Icon icon={icon}/>
                {text}
            </button>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Tab);
