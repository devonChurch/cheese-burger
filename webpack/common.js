const autoprefixer = require('autoprefixer');
const path = require('./path')();
const environment = require('./environment');

module.exports = () => {

    return {
      // Entry accepts a path or an object of entries.
      // We'll be using the latter form given it's
      // convenient with more complex configurations.
        entry: {
            src: `${path.src}/index.js`
        },

        output: {
            path: path.dist,
            filename: 'cheese-burger.js' // '[name].js'
        },

        module: {

            preLoaders: [

                {
                    test: /\.js$/,
                    loaders: ['eslint'],
                    include: path.src
                }

            ],

            loaders: [

                {
                    test: /\.js$/,
                    loaders: ['babel'], // ['babel!eslint'],
                    include: path.src
                }

                // {
                //     test: /\.scss$/,
                //     loaders: ['style', 'css', 'postcss', 'sass'],
                //     include: path.src
                //
                // }

            ]

        },

        plugins: [
            environment()
        ],

        postcss() {
            return [autoprefixer];
        },

    };

};
