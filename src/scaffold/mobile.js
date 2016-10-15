import React, {Component} from 'react';
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

	generateContentGroup({color, tab, heading, description, callToAction}, i) {

		const {showTabCallback, generateSettings} = this.props;
		const settings = generateSettings(i);

		return (

			<div key={i}>
				<Tab tab={{...tab, color, settings, showTabCallback: () => showTabCallback(i)}}/>
				<Description description={{color, heading, description, callToAction, settings}}/>
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

export default Mobile;
