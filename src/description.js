const React = require('react');
const {Component} = React;

class Description extends Component {

	render() {

		const {description} = this.props;

		return (

			<div>
				<p>{description}</p>
			</div>

		);

	}

}

module.exports = Description;
