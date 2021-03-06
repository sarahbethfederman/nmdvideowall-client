import Ember from 'ember';

export default Ember.Component.extend({
	submit: function(e) {
		// submit manually (file upload is weird in Ember)
		const form = $('#submission-form')[0];
		e.preventDefault();
		$.ajax({
      url: '/api/v1/submissions',
      type: 'POST',
      data: new FormData(form),
      processData: false,
      contentType: false
    }).success(function(res) {
      console.log('submitted form');
      model.reload();
    }).error(function(res) {
      console.log('error');
    });
	},
	actions: {
  }	
});
 