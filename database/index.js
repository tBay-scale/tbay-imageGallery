const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// Uncomment line below and lines 21-71 to seed db with 10,000,000 items
// const data = require('./data.js');


// Retain schema and model for queries to proper collection in db
const productSchema = new Schema({
  '_id': Number,
  'prime_pic': String,
  'pic_1': String,
  'pic_2': String,
});


const Product = mongoose.model('Product', productSchema);
const connectionString = 'mongodb://127.0.0.1:27017/Products';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


// let newID = 1;

// function createAllData () {
//   const newData = [];
//   const numItems = 1000;
//   //1 = 100 items
//   //10 = 1,000 items;
//   //100 = 10,000 items
//   //1,000 = 100,000 items
//   //10,000 = 1,000,000 items
//   //100,000 = 10,000,000 items
//   for (var i = 0; i < numItems; i++) {
//     for (var k = 0; k < data.length; k++) {
//       let dataCopy = createDeepCopy(data[k]);
//       dataCopy._id = newID;
//       newID++;
//       newData.push(dataCopy);
//     }
//   }
//   return newData;
// }

// function createDeepCopy (obj) {
//   const newObj = {};
//   for (var key in obj) {
//     newObj[key] = obj[key];
//   }
//   return newObj;
// }


// var iterations = 1;

// function seed100000 () {
//   console.log(`Seeding ${newID} - ${newID + 99999}`)
//   const items = createAllData();
//   Product.insertMany(items)
//   .then(() => {
//     iterations++;
//     if (iterations <= 100) {
//       seed100000();
//     }
//     else {
//       console.log('Finished');
//     }
//   })
// }

// seed100000();



const getProductById = (id, callback) => {
  Product.find({ id }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

module.exports = {
  getProductById,
};
