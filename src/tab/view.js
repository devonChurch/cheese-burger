import React, {Component, PropTypes} from 'react';
import radium from 'radium';
import styles from './style';
import Icon from '../icon/view';

class Tab extends Component {

	render() {

		const {icon, text, color, settings, showTabCallback} = this.props.tab; // eslint-disable-line react/prop-types
		const s = styles({...settings, color});

		return (

			<button className="Button--reset" style={s.base} onClick={showTabCallback} ref="button">
                <span style={s.icon}><Icon icon={{type: icon, color: s.text.color, size: '1.5rem'}}/></span>
                <span style={s.text}>{text}</span>
            </button>

		);

	}

}

Tab.proptypes = {
	tab: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		color: PropTypes.string,
		settings: PropTypes.object.isRequired,
		showTabCallback: PropTypes.func.isRequired
	})
}

const withRaduimDecorator = radium()(Tab);

export {Tab, withRaduimDecorator};
export default withRaduimDecorator;
