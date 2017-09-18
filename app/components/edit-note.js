import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote: function() {
      console.log("this", this);
      console.log("this.get('note'), ", this.get('note'));
      this.get('note').save();
    },
    closeNote: function() {
      this.sendAction('close');
    }
  }
});
