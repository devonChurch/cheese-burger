const React = require('react');
const {Component} = React;
const Tab = require('./tab');
const Description = require('./description');

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

module.exports = Mobile;
