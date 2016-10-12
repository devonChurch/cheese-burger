import React, {Component} from 'react';
import Radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

@Radium
class Tab extends Component {

	render() {

		const {color, tab: {icon, text}, activateTab} = this.props;
		const s = styles({color});

		return (

			<button style={s.base} onClick={activateTab} ref="button">
                <Icon icon={icon}/>
                {text}
            </button>

		);

	}

}

export default Tab;
