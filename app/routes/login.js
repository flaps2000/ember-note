import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.queryRecord('user', {
        name: this.controller.get('name')
      }).then((user) => {
        this.session.set('user',user);
        this.logger.log("this.session, ", this.session);
        console.log("this.session, ", this.session);
        this.logger.log("this.session.get('user'), ", this.session.get('user'));
        console.log("this.session.get('user'), ", this.session.get('user'));
        this.logger.log("this.session.get('user').get('name'), ", this.session.get('user').get('name'));
        console.log("this.session.get('user').get('name'), ", this.session.get('user').get('name'));
        this.logger.log("About to transition to notebooks.");
        this.transitionTo('notebooks', user.get('id'));
      });
    }
  }
});
