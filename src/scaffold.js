const React = require('react');
const {Component} = React;
const {connect} = require('react-redux');
const {IS_MOBILE} = require('./actions');
const layout = require('./layout');
const Mobile = require('./mobile');
const Desktop = require('./desktop');

class Scaffold extends Component {

	updateIsLayoutMobile() {

		this.props.dispatch({
            type: IS_MOBILE,
            data: layout.mobile
        });

	}

	componentWillMount() {

		layout.register(this.updateIsLayoutMobile.bind(this));

	}

	render() {

        const Content = layout.mobile ? Mobile : Desktop;

		return (

			<div>
				<Content {...this.props} />
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

module.exports = connect(mapStateToProps)(Scaffold);
