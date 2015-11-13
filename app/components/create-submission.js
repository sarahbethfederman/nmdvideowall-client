import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		createSubmission: function(model) {
			this.sendAction('createSubmission', model);
		}
  }	
});
 