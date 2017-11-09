var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

module.exports = {
  connect() {
    client.connect('mongodb://localhost:27017/searchImage', (err, db) => {
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to MongoDB");
    });
  },
  search(){
    return _db.collection('search');
  }
}