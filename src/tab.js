import React, {Component} from 'react';
import Icon from './icon';

class Tab extends Component {

	reveal() {

		const {button} = this.refs;

		console.log('reveal --> mobile?', button);
		console.dir(button);

	}

	render() {

		const {icon, text} = this.props.tab;

		return (

			<button onClick={this.reveal.bind(this)} ref="button">
                <Icon icon={icon}/>
                {text}
            </button>

		);

	}

}

export default Tab;
