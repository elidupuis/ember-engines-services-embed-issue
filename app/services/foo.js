import Service from '@ember/service';

export default class FooService extends Service {
  // simple test service that just has one getter
  get bar() {
    return 'baz';
  }
}
