import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route-with-mounted-engine', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:route-with-mounted-engine');
    assert.ok(route);
  });
});
