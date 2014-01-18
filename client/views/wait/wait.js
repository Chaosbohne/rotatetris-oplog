Template.wait.helpers({
  imageSrc: function() {
    return "https://chart.googleapis.com/chart?cht=qr&chl=" + document.URL + "&chs=180x180&choe=UTF-8&chld=L|2"
  },
  currentUrl: function() {
    return document.URL;
  }
});