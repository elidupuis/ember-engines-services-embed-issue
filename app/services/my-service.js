import Service from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class MyServiceService extends Service {
  // simple test service that just has one getter
  get myProperty() {
    return htmlSafe('<strong>The service property</strong>');
  }
}
