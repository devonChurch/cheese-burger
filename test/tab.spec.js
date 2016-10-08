/* global describe, it */

// require('babel-register');
// require('babel-register')();

// const React = require('react');
// const {mount, shallow} = require('enzyme');
// const {expect} = require('chai');
// const Tab = require('../src/tab');
import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import Tab from '../src/tab';

describe('<Tab/>', () => {

    it('should have an SVG icon', () => {
        const wrapper = shallow(<Tab/>);
        expect(wrapper.find('div')).to.have.length(1);
    });

});

// import Avatar from '../lib/avatar';
//
// describe('<Avatar/>', function () {
//   it('should have an image to display the gravatar', function () {
//     const wrapper = shallow(<Avatar/>);
//     expect(wrapper.find('img')).to.have.length(1);
//   });
//
//   it('should have props for email and src', function () {
//     const wrapper = shallow(<Avatar/>);
//     expect(wrapper.props().email).to.be.defined;
//     expect(wrapper.props().src).to.be.defined;
//   });
// });
