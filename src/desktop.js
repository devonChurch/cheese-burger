const React = require('react');
const {Component} = React;
const Tab = require('./tab');
const Description = require('./description');

class Desktop extends Component {

	render() {

		const {content} = this.props;
		const tabs = content.map(({tab}, i) => <Tab tab={tab} key={i}/>);
		const descriptions = content.map(({description}, i) => <Description description={description} key={i}/>);

		return (

			<div>
				DESKTOP
				<div>{tabs}</div>
				<div>{descriptions}</div>
			</div>

		);

	}

}

module.exports = Desktop;
