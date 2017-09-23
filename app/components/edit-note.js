import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote: function() {
      this.get('note').save().then(() => {
        this.sendAction('close');
      }, function() {
        alert('save failed');
      });
    },
    closeNote: function() {
      this.sendAction('close');
    }
  }
});
