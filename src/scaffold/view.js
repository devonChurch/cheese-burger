import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IS_MOBILE, ACTIVATE_TAB} from '../actions';
import layout from '../layout';
import Mobile from './mobile';
import Desktop from './desktop';

class Scaffold extends Component {

	constructor(props) {

		super(props);
		this.activateTabOnClick = this.activateTabOnClick.bind(this);

	}

	updateIsLayoutMobile() {

		this.props.dispatch({
            type: IS_MOBILE,
            data: layout.mobile
        });

	}

	componentWillMount() {

		layout.register(this.updateIsLayoutMobile.bind(this));

	}

	activateTabOnClick(key) {

		this.props.dispatch({
			type: ACTIVATE_TAB,
			data: key
		});

	}

	render() {

        const Content = layout.mobile ? Mobile : Desktop;

		return (

			<div>
				<Content {...this.props} activateTab={this.activateTabOnClick}/>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Scaffold);
