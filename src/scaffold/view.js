import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IS_MOBILE} from '../actions';
import layout from '../layout';
import Mobile from './mobile';
import Desktop from './desktop';

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

export default connect(mapStateToProps)(Scaffold);
