Template.inuse.events({
  'click .play': function(event, template) {
    Meteor.call('getRandomId', function(error, randomId) {
      if(error) {
        console.log('Error while waiting for getRandomId');
      }else {
        Router.go('/wait/' + randomId + '/desktop');
      }
    });
  }
});