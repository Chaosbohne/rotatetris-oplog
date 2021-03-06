Template.start.events({
  'click .play': function(event, template) {
    Meteor.call('getRandomId', function(error, randomId) {
      if(error) {
        console.log('Error while waiting for getRandomId');
      }else {
        Router.go('/' + randomId);
      }
    });
  }
});

Template.start.rendered = function(){
  $('#myModal').modal('show');
};


Template.start.helpers({
  currentUrl: function() {
    return document.URL;
  }
});