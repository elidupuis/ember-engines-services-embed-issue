import Engine from '@ember/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

export default class MyRouteableEngine extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;

  dependencies = {
    services: ['foo', 'my-service'], // 'foo'
  };

  engines = {
    'my-routeless-engine': {
      dependencies: {
        services: ['my-service', 'foo'],
      },
    },
  };
}

loadInitializers(MyRouteableEngine, modulePrefix);

// const Eng = Engine.extend({
//   modulePrefix,
//   Resolver,

//   dependencies: {
//     services: ['foo', 'my-service'], // 'foo'
//   },

//   engines: {
//     'my-routeless-engine': {
//       dependencies: {
//         services: ['foo', 'my-service'],
//       },
//     },
//   },
// });

// loadInitializers(Eng, modulePrefix);

// export default Eng;
