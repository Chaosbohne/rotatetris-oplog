Meteor.methods({
  insertUser: function(insertUser) {
    
    //RACE CONDITION !
    var user = _.pick(insertUser,['hash', 'client']);
    
    var count = Users.find(user).count();
    
    if(count !== 0) 
      throw new Meteor.Error(303, 'Hash with client already in use');      
    
    user = _.extend(user, { created : new Date().getTime()});
    return Users.insert(user);
  },
  deleteUser: function(deleteUser) {
    console.log(deleteUser);
    var user = _.pick(deleteUser,['hash', 'client']);
    return Users.remove(user);
  }
  
});