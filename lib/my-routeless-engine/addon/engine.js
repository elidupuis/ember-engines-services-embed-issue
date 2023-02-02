import Engine from '@ember/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

export default class MyRoutelessEngine extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;

  dependencies = {
    services: ['foo', 'my-service'], // 'foo'
  };
}

loadInitializers(MyRoutelessEngine, modulePrefix);

// const Eng = Engine.extend({
//   modulePrefix,
//   Resolver,

//   dependencies: {
//     services: ['foo', 'my-service'],
//   },
// });

// loadInitializers(Eng, modulePrefix);

// export default Eng;
