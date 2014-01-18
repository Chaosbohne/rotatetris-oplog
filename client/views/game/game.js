Template.game.helpers({
  isPlaying: function() {
    return Session.get('isPlaying');
  }
});

Template.game.destroyed = function() { 
  var user = null;
    
  if(isSmartphone === false) {
    //create desktopUser
    user = {
      hash: roomId,
      client: 'desktop'
    };    
  }else {
    user = {
      hash: roomId,
      client: 'smartphone'
    };    
  }
  
  Meteor.call('deleteUser', user, function(error) {
  });
}