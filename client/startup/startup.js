Meteor.startup(function() {
  var uuid = new Hashids("this is my salt for rotatetris", 8);  
  console.log(uuid.encrypt(Date.now()));
  console.log(uuid.encrypt(Date.now()));
  console.log(uuid.encrypt(Date.now()));
  console.log(uuid.encrypt(Date.now()));
  console.log(uuid.encrypt(Date.now()));
});