/* global describe, it */
/* eslint no-unused-expressions: 0 */

import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {Tab} from '../src/tab/view';

describe('<Tab/>', () => {

    let showTabCallbackComplete;

    const props = {
        color: 'red',
        icon: 'bubble',
        text: 'Heading',
        settings: {},
        showTabCallback: () => showTabCallbackComplete = true
    };

    const wrapper = shallow(<Tab tab={props}/>);

    it('should have an SVG icon', () => {

        const Icon = wrapper.find('Icon');

        expect(Icon).to.have.length(1);

    });

    it('should run the supplied "show tab" callback when clicked', () => {

        const button = wrapper.find('button');

        button.simulate('click');
        expect(showTabCallbackComplete).to.be.true;

    });

    it('should display text supplied via props', () => {

        const text = wrapper.text();

        expect(text).to.contain(props.text);

    });

});
