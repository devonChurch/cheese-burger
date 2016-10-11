import React, {Component} from 'react';
import Radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

@Radium
class Tab extends Component {

	reveal() {

		const {button} = this.refs;

		console.log('reveal --> mobile?', button);
		console.dir(button);

	}

	render() {

		console.log('tab props', this.props);

		const {color, tab: {icon, text}} = this.props;
		const s = styles({color});

		return (

			<button style={s.base} onClick={this.reveal.bind(this)} ref="button">
                <Icon icon={icon}/>
                {text}
            </button>

		);

	}

}

export default Tab;
