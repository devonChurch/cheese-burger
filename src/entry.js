const requireAll = (context) => context.keys().map(context);

require('./initialise');
requireAll(require.context('./boilerplate', true, /^\.\/.*\.scss$/));
