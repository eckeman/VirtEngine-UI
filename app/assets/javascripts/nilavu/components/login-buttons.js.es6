export default Ember.Component.extend({
    elementId: 'login-buttons',
    classNameBindings: ['hidden'],

    hidden: Em.computed.equal('buttons.length', 0),
    hideSocialButtons: Em.computed.equal('buttons.length', 0),
    
    buttons: function() {
        return Em.get('Nilavu.LoginMethod.all');
    }.property(),

    actions: {
        externalLogin: function(provider) {
            this.sendAction('action', provider);
        }
    }
});
