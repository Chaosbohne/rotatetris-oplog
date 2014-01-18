

GameController = RouteController.extend({
  template: 'game',
  
  layoutTemplate: 'layout',

  before: function() {
    roomId = this.params.id;
  },
  
  waitOn: function () {
    return [Meteor.subscribe('commands', this.params.id), Meteor.subscribe('users', this.params.id)];
  },

  after: function() {

  },
  
  load: function() {    
    //isDesktop
    if(isSmartphone === false) {
      //create desktopUser
      var user = {
        hash: this.params.id,
        client: 'desktop'
      };
      
      //Add user to database
      Meteor.call('insertUser', user, function(error) {
        //If a user with this route already exists in db
        if(error)
          Router.go('/inuse');    
      });
      
      //Save this context
      var that = this;
      //Flag that prevents observeHandle from executing initial callbacks
      var initializing = true;
      
      //If smartphoneuser is already on route, start game now
      var smartphoneUsers = Users.find({hash: this.params.id, client: 'smartphone', reactive: false}).count();
      if(smartphoneUsers !== 0) {
        Session.set('isPlaying', true);
      }
      
      //Create an observe to trigger added/removed-event       
      userHandle = Users.find({hash: this.params.id, client: 'smartphone'}).observe({
        added: function(doc, idx) {
          if(!initializing) {
            Session.set('isPlaying', true);
          }
        }
      });      

      commandHandle = Commands.find({hash: this.params.id}).observe({
        added: function(doc, idx) {     
          console.log(doc);
          if(!initializing) {
            if(started){
              console.log(doc);
              inputReceived(doc.command);
              Meteor.call('deleteCommand', doc, function(error) {
              });
            }else {
              started = true;
              startGame();              
            }
          }
        }
      });      
      
      initializing = false;  
      
    }else {
      //create smartphoneUser
      var user = {
        hash: this.params.id,
        client: 'smartphone'
      };
      
      //Add user to database
      Meteor.call('insertUser', user, function(error) {
        //If a user with this route already exists in db
        if(error)
          Router.go('/inuse');    
      });
            
      //Save this context
      var that = this;
      //Flag that prevents observeHandle from executing initial callbacks
      var initializing = true;
      
      //If desktopUsers is already on route, start game now
      var desktopUsers = Users.find({hash: this.params.id, client: 'desktop', reactive: false}).count();
      if(desktopUsers !== 0) {
        Session.set('isPlaying', true);
      }
      
      //Create an observe to trigger added/removed-event       
      userHandle = Users.find({hash: this.params.id, client: 'desktop'}).observe({
        added: function(doc, idx) {
          if(!initializing) {
            Session.set('isPlaying', true);            
          }
        }
      });      
      
      initializing = false;  
      
    }
  },
  
  unload: function() {   
  },
  
  data: function () {
  },
  
  show: function() {
    this.render();
  }
});


Router.map(function() {
  this.route('game', {
    path: '/:id'
  });
});