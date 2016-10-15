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
		this.generateDescription = this.generateDescription.bind(this);

	}

	generateTab({color, tab}, i) {

		const {showTabCallback, generateSettings} = this.props;
		const settings = generateSettings(i);

		return <Tab tab={{...tab, color, settings, showTabCallback: () => showTabCallback(i)}} key={i}/>;

	}

	generateDescription(description, i) {

		const {generateSettings} = this.props;
		const settings = generateSettings(i);

		return <Description description={{...description, settings}} key={i}/>;

	}

	render() {

		const {content} = this.props;
		const tabs = content.map(this.generateTab);
		const descriptions = content.map(this.generateDescription);
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
