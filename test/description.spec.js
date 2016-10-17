/* global describe, it */
/* eslint no-unused-expressions: 0 */

import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import {Description} from '../src/description/view';

describe('<Description/>', () => {

    const props = {
        color: 'red',
		image: {},
		heading: 'Heading',
		description: 'Description',
		callToAction: {
			text: 'Call to Action',
			url: 'https://www.google.com/'
		},
        settings: {}
    };

    const wrapper = shallow(<Description description={props}/>);

    it('should wrap the content inside an additional overflow <div/>', () => {

        const overflow = wrapper.find('div > div');

        expect(overflow).to.have.length(1);

    });

    it('should display an <Image/>', () => {

        const Image = wrapper.find('Image');

        expect(Image).to.have.length(1);

    });

    it('should display a <h2/> with text supplied via props', () => {

        const h2 = wrapper.find('h2');

        expect(h2).to.have.length(1);
        expect(h2.text()).to.equal(props.heading);

    });

    it('should display a description with text supplied via props', () => {

        const p = wrapper.find('p');

        expect(p).to.have.length(1);
        expect(p.text()).to.equal(props.description);

    });

    it('should display a <a/> populated with text and an href', () => {

        const {callToAction} = props;
        const a = wrapper.find('a');

        expect(a).to.have.length(1);
        expect(a.text()).to.equal(callToAction.text);
        expect(a.html()).to.contain(`href="${callToAction.url}"`);

    });

});
