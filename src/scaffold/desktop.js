import React, {Component} from 'react';
import Radium from 'radium';
import Tab from '../tab/view';
import Description from '../description/view';
import style from './style';

@Radium
class Desktop extends Component {

	render() {

		const {content} = this.props;
		const tabs = content.map(({color, tab}, i) => <Tab color={color} tab={tab} key={i}/>);
		const descriptions = content.map(({description, color}, i) => <Description color={color} description={description} key={i}/>);
		const s = style().desktop;

		console.log('desktop s', s);

		return (

			<div style={s.base}>
				<div style={s.tabs}>{tabs}</div>
				<div style={s.descriptions}>{descriptions}</div>
			</div>

		);

	}

}

export default Desktop;
