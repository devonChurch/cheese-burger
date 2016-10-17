import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IS_MOBILE, SHOW_TAB, HIDE_TAB} from '../state/actions';
import layout from '../helpers/layout';
import Mobile from './mobile';
import Desktop from './desktop';

class Scaffold extends Component {

	constructor(props) {

		super(props);
		this.showTabCallbackOnClick = this.showTabCallbackOnClick.bind(this);
		this.generateSettings = this.generateSettings.bind(this);

	}

	updateIsLayoutMobile() {

		this.props.dispatch({
            type: IS_MOBILE,
            data: layout.mobile
        });

	}

	generateSettings(i) {

		const {content, showTab, hideTab} = this.props;
		const isShowing = showTab === i;
		const isHiding = hideTab === i;
		const isUnderActive = showTab + 1 === i;
		const isFirstTab = i === 0;
		const isLastTab = i === content.length - 1;

		return {isShowing, isHiding, isUnderActive, isFirstTab, isLastTab};

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
				<Content {...this.props} showTabCallback={this.showTabCallbackOnClick} generateSettings={this.generateSettings}/>
			</div>

		);

	}

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Scaffold);
