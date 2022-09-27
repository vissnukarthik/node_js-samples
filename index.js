var cal = require('./calc');
var fs= require('fs');


console.log(cal.add(4,5));

fs.readFile('calc.js','utf8',function(err,data){
 // console.log(data);
});

fs.writeFile('writeFile.js','console.log("this is inside the file")',function if(err) {
  console.log("data is written");
})

fs.appendFile('writeFile.js',"console.log('appening')",function(err,data){
  console.log("append");
});

// fs.unlink('writeFile.js',function(err) {
//   console.log("this file is deleted");
// })