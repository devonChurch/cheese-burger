import React, {Component} from 'react';
import Radium from 'radium';
import styles from './style';
import Icon from '../icon/react';

@Radium
class Tab extends Component {

	reveal() {

		const {button} = this.refs;

		console.log('reveal --> mobile?', button);
		console.dir(button);

	}

	render() {

		const {icon, text} = this.props.tab;
		const s = styles();

		return (

			<button style={s.base} onClick={this.reveal.bind(this)} ref="button">
                <Icon icon={icon}/>
                {text}
            </button>

		);

	}

}

export default Tab;
