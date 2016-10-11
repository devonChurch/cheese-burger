import React, {Component} from 'react';
import Radium from 'radium';
import Tab from '../tab/view';
import Description from '../description/view';

@Radium
class Mobile extends Component {

	generateContentGroup({color, tab, description}, i) {

		return (

			<div key={i}>
				<Tab color={color} tab={tab}/>
				<Description color={color} description={description}/>
			</div>

		);

	}

	render() {

		const {content} = this.props;
		const contentGroups = content.map(this.generateContentGroup);

		return (

			<div>
				{contentGroups}
			</div>

		);

	}

}

export default Mobile;
