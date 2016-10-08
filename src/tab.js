const React = require('react');
const {Component} = React;

class Tab extends Component {

	reveal() {

		const {button} = this.refs;

		console.log('reveal --> mobile?', button);
		console.dir(button);

	}

	render() {

		const {tab} = this.props;

		return (

			<button onClick={this.reveal.bind(this)} ref="button">
                <div>ICON</div>
                {tab}
            </button>

		);

	}

}

module.exports = Tab;
