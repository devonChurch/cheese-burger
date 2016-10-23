import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import Tab from '../tab/view';
import Description from '../description/view';
import style from './style';

@Radium
class Mobile extends Component {

	constructor(props) {

		super(props);
		this.generateContentGroup = this.generateContentGroup.bind(this);

	}

	generateContentGroup({color, tab, image, heading, description, callToAction}, i) {

		const {showTabCallback, generateSettings} = this.props;
		const settings = generateSettings(i);

		return (

			<div key={i}>
				<Tab tab={{...tab, color, settings, showTabCallback: () => showTabCallback(i)}}/>
				<Description description={{color, image, heading, description, callToAction, settings}}/>
			</div>

		);

	}

	render() {

		const {content} = this.props;
		const contentGroups = content.map(this.generateContentGroup);
		const s = style();

		return (

			<div style={s.base}>
				{contentGroups}
			</div>

		);

	}

}

Mobile.propTypes = {
	showTabCallback: PropTypes.func.isRequired,
	generateSettings: PropTypes.func.isRequired,
	content: PropTypes.array.isRequired
}

export default Mobile;
