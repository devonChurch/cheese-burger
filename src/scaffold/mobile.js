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

		const {content, showTabCallback, showTab, hideTab} = this.props;
		const isShowing = showTab === i;
		const isHiding = hideTab === i;
		const isUnderActive = showTab + 1 === i;
		const isFirstTab = i === 0;
		const isLastTab = i === content.length - 1;

		return (

			<div key={i}>
				<Tab tab={{...tab, color, isShowing, isHiding, isUnderActive, isFirstTab, isLastTab, showTabCallback: () => showTabCallback(i)}}/>
				<Description color={color} content={{heading, description, callToAction}} index={i}/>
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
