import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
    // do we need to define a default index or application route here?
    this.route('foo', { path: '/' });
});
