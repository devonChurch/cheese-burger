import React, {Component} from 'react';
import Tab from './tab/react';
import Description from './description';

class Desktop extends Component {

	render() {

		const {content} = this.props;
		const tabs = content.map(({tab}, i) => <Tab tab={tab} key={i}/>);
		const descriptions = content.map(({description}, i) => <Description description={description} key={i}/>);

		return (

			<div>
				<div>{tabs}</div>
				<div>{descriptions}</div>
			</div>

		);

	}

}

export default Desktop;
