import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('submission'); 
	},
	isCreating: false,
	actions: {
	}
});
