const React = require('react');
const {Component} = React;
const Tab = require('./tab');
const Description = require('./description');

class Mobile extends Component {

	generateCombo({tab, description}, i) {

		return (

			<div key={i}>
				<Tab tab={tab}/>
				<Description description={description}/>
			</div>

		);

	}

	render() {

		const {content} = this.props;
		const combos = content.map(this.generateCombo);

		return (

			<div>
				{combos}
			</div>

		);

	}

}

module.exports = Mobile;
