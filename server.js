var express = require('express'); // require express
var app     = express();          // create an app

app.use(express.static('public'));// Share a directory

// listen to port 3000
app.listen(4000, function() {
  // and log a msg to the console
  console.log('express server is up on port 4000');
});
