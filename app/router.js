import EmberRouter from '@ember/routing/router';
import config from 'engine-service-sharing/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('my-routeable-engine');
  this.route('route-with-mounted-engine');
  this.mount('my-routeless-engine');
});
