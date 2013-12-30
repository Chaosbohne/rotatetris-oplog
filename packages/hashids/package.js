Package.describe({
  summary: "Adding the npm-module hashids."
});

Npm.depends({
  hashids: '0.3.3' // Where x.x.x is the version, e.g. 0.3.2
});

Package.on_use(function (api) {
    api.add_files('hashids.js', 'server'); // Or 'client', or ['server', 'client']
  
    if(api.export)
      api.export('Hashids');  
});