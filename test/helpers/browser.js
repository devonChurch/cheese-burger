// https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// const jsdom = require('jsdom').jsdom;
//
// const exposedProperties = ['window', 'navigator', 'document'];
//
// global.document = jsdom('');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });
//
// global.navigator = {
//   userAgent: 'node.js'
// };
//
// documentRef = document; // Eslint disable