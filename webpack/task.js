/* global process */

// task references the NPM task eg "start" represents "npm start".
module.exports = (() => {

    console.log('process.env.npm_lifecycle_event', process.env.npm_lifecycle_event);

    switch (process.env.npm_lifecycle_event) {

        case 'build:development':
            return 'dev';

        default:
            return 'prod';

    }

})();
