var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "dev2"
var password = "dreambig1987";
var address = "@ds029328.mongolab.com:29328";
var dbname = "first_app"; 
connect();
// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address + '/' + dbname;
  mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}