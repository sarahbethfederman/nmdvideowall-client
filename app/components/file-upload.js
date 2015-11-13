import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  filesDidChange: function(files) {
    var uploadUrl = this.get('url');

    var uploader = EmberUploader.Uploader.create({
      url: uploadUrl
    });

    uploader.on('progress', function(e) {
      // Handle progress changes
      // Use `e.percent` to get percentage
    });

    uploader.on('didUpload', function(e) {
      // Handle finished upload
    });

    if (!Ember.isEmpty(files)) {
      var promise = uploader.upload(files[0]);
    }
  }
});