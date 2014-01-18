Meteor.methods({
  insertCommand: function(insertCommand) {
    var command = _.pick(insertCommand,['hash', 'command']);
    command = _.extend(command, { created : new Date().getTime()});
    return Commands.insert(command);
  },
  deleteCommand: function(deleteCommand) {
    var command = _.pick(deleteCommand,['hash', 'command']);
    return Commands.remove(command);
  }
  
});