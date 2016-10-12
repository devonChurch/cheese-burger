import React, {Component} from 'react';
import Radium from 'radium';
import Tab from '../tab/view';
import Description from '../description/view';

@Radium
class Mobile extends Component {

	constructor(props) {

		super(props);
		this.generateContentGroup = this.generateContentGroup.bind(this);

	}

	generateContentGroup({color, tab, description}, i) {

		const activateTab = () => this.props.activateTab(i);

		return (

			<div key={i}>
				<Tab color={color} tab={tab} activateTab={activateTab}/>
				<Description color={color} description={description} index={i}/>
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
