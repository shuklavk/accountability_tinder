var mongoose = require('mongoose');
mongoose.connect('');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


// module.exports.selectAll = selectAll;