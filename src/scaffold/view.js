import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IS_MOBILE, SHOW_TAB, HIDE_TAB} from '../actions';
import layout from '../layout';
import Mobile from './mobile';
import Desktop from './desktop';

class Scaffold extends Component {

	constructor(props) {

		super(props);
		this.showTabCallbackOnClick = this.showTabCallbackOnClick.bind(this);

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

	showTabCallbackOnClick(key) {

		this.props.dispatch({
			type: HIDE_TAB,
			data: this.props.showTab
		});

		this.props.dispatch({
			type: SHOW_TAB,
			data: key
		});

	}

	render() {

        const Content = layout.mobile ? Mobile : Desktop;

		return (

			<div>
				<Content {...this.props} showTabCallback={this.showTabCallbackOnClick}/>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Scaffold);
