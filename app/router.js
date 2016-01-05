import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('delivery');
  this.route('partners');
  this.route('programming');
  this.route('talk-lookup');
});

export default Router;
