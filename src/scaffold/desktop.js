import React, {Component} from 'react';
import Radium from 'radium';
import Tab from '../tab/view';
import Description from '../description/view';
import style from './style';

@Radium
class Desktop extends Component {

	constructor(props) {

		super(props);
		this.generateTab = this.generateTab.bind(this);

	}

	generateTab({color, tab}, i) {

		const {content, showTabCallback, showTab, hideTab} = this.props;
		const isShowing = showTab === i;
		const isHiding = hideTab === i;
		const isFirstTab = i === 0;
		const isLastTab = i === content.length - 1;

		return <Tab tab={{...tab, color, isShowing, isHiding, isFirstTab, isLastTab, showTabCallback: () => showTabCallback(i)}} key={i}/>;

	}

	render() {

		const {content} = this.props;
		const tabs = content.map(this.generateTab);
		const descriptions = content.map(({heading, description, callToAction, color}, i) => <Description color={color} content={{heading, description, callToAction}} index={i} key={i}/>);
		const s = style();

		return (

			<div style={s.base}>
				<div style={s.tabs}>{tabs}</div>
				<div style={s.descriptions}>{descriptions}</div>
			</div>

		);

	}

}

export default Desktop;
