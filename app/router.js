import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('submissions', function() {
  	this.route('create');
  });
  this.route('submission', { path: '/submission/:submission_id'}, function() {
  	this.route('edit');
  });
  this.route('guidelines');
});

export default Router;
