Meteor.publish('users', function(hash) {
  return Users.find({hash: hash});
});

Meteor.publish('commands', function(hash) {
  return Commands.find({hash: hash});
});