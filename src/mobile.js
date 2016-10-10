import React, {Component} from 'react';
import Tab from './tab/react';
import Description from './description';

class Mobile extends Component {

	generateContentGroup({tab, description}, i) {

		return (

			<div key={i}>
				<Tab tab={tab}/>
				<Description description={description}/>
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
