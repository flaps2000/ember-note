import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: function() {
    if(this.get('session.user')) {
      return {
        'username' : this.get('session.user').get('name')
      };
    }
  }.property('session.user')
});
