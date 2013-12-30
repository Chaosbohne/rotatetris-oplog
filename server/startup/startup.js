Meteor.startup(function() {
  //var uuid = new this.Hashids('abc');
  //var Hashids = Npm.require('hashids');
  var hashids = new Hashids('this is my salt');
  var numbers = hashids.decrypt("NkK9");
  console.log(numbers);
});