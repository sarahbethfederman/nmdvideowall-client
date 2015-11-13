export default Ember.Controller.extend({
  actions: {
    toggleCreate() {
      this.toggleProperty('isCreating');
    }
  }
});