/* eslint-env node */
'use strict';

const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'my-routeable-engine',

  lazyLoading: Object.freeze({
    enabled: false,
  }),

  isDevelopingAddon() {
    return true;
  },

  // engines: {
  //   'my-routeless-engine': {
  //     dependencies: {
  //       services: ['my-service'],
  //     },
  //   },
  // }
});
