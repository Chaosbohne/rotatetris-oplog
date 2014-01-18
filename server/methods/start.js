Meteor.methods({
  getRandomId: function() {
    var hashids = new Hashids('this is my salt',8);
    count = count + 1;
    var numbers = hashids.encrypt(count);    
    return numbers;
  }
});