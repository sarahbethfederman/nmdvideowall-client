import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('submission'); 
	},
	isCreating: false,
	actions: {
		createSubmission: function(model) {
			// create the record
			var submission = this.store.createRecord('submission', {
				title: model.title,
				author: model.author,
				description: model.description
			});
			submission.save();
		}
	}
});
