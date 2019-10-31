const data = require('./data.js')

let newID = 1;

// returns 100,000 items worth of data
function generateBatchOfData () {
  const newData = [];
  const numItems = 1000;
  //1 = 100 items
  //10 = 1,000 items;
  //100 = 10,000 items
  //1,000 = 100,000 items
  //10,000 = 1,000,000 items
  //100,000 = 10,000,000 items
  for (var i = 0; i < numItems; i++) {
    for (var k = 0; k < data.length; k++) {
      let dataCopy = createDeepCopy(data[k]);
      dataCopy._id = newID;
      newID++;
      newData.push(dataCopy);
    }
  }
  return newData;
}

function createDeepCopy (obj) {
  const newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}